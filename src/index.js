import React, { useState, useEffect } from "react"
import YouTubePlayer from "youtube-player"

import styles from "./index.module.css"

import VideoPause from "../assets/video_pause.svg"
import VideoPlay from "../assets/video_play.svg"
import EnterFullscreen from "../assets/video_enter_fullscreen.svg"
import ExitFullscreen from "../assets/video_exit_fullscreen.svg"
import VolumeMute from "../assets/video_volume_mute.svg"
import VolumeOn from "../assets/video_volume_on.svg"

const loadingAnim = (<div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>)

const VideoPlayer = ({ children, containerClassName, videoId, playButtonColor = "black", sliderPrimaryColor = "red", sliderSecondaryColor = "white" }) => {

  const [thumbRadius, setThumbRadius] = useState(15)
  const [player, setPlayer] = useState(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isFullscreen, setFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(200)
  const [volume, setVolume] = useState(100)
  const [prevVolume, setPrevVolume] = useState(0)
  const [progressInterval, setProgressInterval] = useState(null)
  const [showTimestamp, setShowTimestamp] = useState(false)
  const [durationWidth, setDurationWidth] = useState(300)
  const [volumeWidth, setVolumeWidth] = useState(80)
  const [showLoading, setShowLoading] = useState(false)
  const [inactive, setInactive] = useState(false)
  const [onControls, setOnControls] = useState(false)

  const onResize = () => {
    const progressSliderWidth = document.getElementById(`progressSlider-${videoId}`).getBoundingClientRect().width
    setDurationWidth(progressSliderWidth)
    const volumeSliderWidth = document.getElementById(`volumeSlider-${videoId}`).getBoundingClientRect().width
    setVolumeWidth(volumeSliderWidth)
  }

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    if (window.innerWidth < 600) {
      setThumbRadius(20)
    }

    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const clearInactiveListener = initHideListener()
    return () => clearInactiveListener()
  }, [])

  useEffect(() => {
    setPlayer(
      new YouTubePlayer(`player-${videoId}`, {
        videoId,
        playerVars: {
          controls: 0,
          enablejsapi: 1,
          rel: 0,
          fs: 0
        }
      })
    )

    document.addEventListener("fullscreenchange", changeFullscreen)
    document.addEventListener("mozfullscreenchange", changeFullscreen)
    document.addEventListener("webkitfullscreenchange", changeFullscreen)
    document.addEventListener("msfullscreenchange", changeFullscreen)

    return () => {
      document.removeEventListener("fullscreenchange", changeFullscreen)
      document.removeEventListener("mozfullscreenchange", changeFullscreen)
      document.removeEventListener("webkitfullscreenchange", changeFullscreen)
      document.removeEventListener("msfullscreenchange", changeFullscreen)
    }
  }, [])

  useEffect(() => {
    if (player !== null) {
      const l1 = player.on("ready", onPlayerReady)
      const l2 = player.on("stateChange", onPlayerStateChange)

      return () => {
        player.off(l1)
        player.off(l2)
      }
    }
  }, [player])

  useEffect(() => {
    return () => clearInterval(progressInterval)
  }, [progressInterval])

  const changeFullscreen = () => {
    setFullscreen(prev => {
      return !prev
    })
    onResize()
  }

  const onPlayerReady = (e) => {
    setProgressInterval(setInterval(() => updateProgress(e), 1000))
    setDuration(e.target.getDuration())
    e.target.setVolume(volume)
  }

  const onPlayerStateChange = (e) => {
    if (e.data === 1) {
      setPlaying(true)
      setShowLoading(false)
    }
    else if (e.data === 3) {
      setShowLoading(true)
    }
    else {
      setPlaying(false)
      setInactive(false)
    }
  }

  const updateProgress = (e) => {
    //checks if dragging progress bar
    const sliderStatus = document.getElementById(`progressSlider-${videoId}`).getAttribute("data-is-progress-drag")
    if (!sliderStatus || sliderStatus === "false") {
      setProgress(e.target.getCurrentTime())
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen()
    } else {
      document.getElementById(`parent-${videoId}`).requestFullscreen()
    }
  }

  const getVolumeIcon = () => {
    if (volume < 1) {
      return <VolumeMute className={styles.button} onClick={onVolumeClick} />
    } else {
      return <VolumeOn className={styles.button} onClick={onVolumeClick} />
    }
  }

  const onVolumeClick = () => {
    if (volume !== 0) {
      setPrevVolume(volume)
      player.setVolume(0)
      setVolume(0)
    }
    else {
      const newVolume = prevVolume
      setPrevVolume(volume)
      player.setVolume(newVolume)
      setVolume(newVolume)
    }
  }

  const convertThumbToValue = (x, width, range) => {
    const val = ((x + Math.floor(thumbRadius / 2)) / width) * range
    if (val < 0) return 0
    else if (val > range) return range
    else return val
  }

  const handleProgressChange = (x) => {
    const val = convertThumbToValue(x, durationWidth, duration)
    setProgress(val)

  }

  const handleVolumeChange = (x) => {
    const val = convertThumbToValue(x, volumeWidth, 100)
    setVolume(val)
    player.setVolume(val)
  }

  const handleSliderClick = (sliderType) => {
    const sliderName = `${sliderType}Slider-${videoId}`
    const thumbName = `${sliderType}Thumb-${videoId}`

    return async (e) => {
      const clickX = e.clientX
      const buffer = 5

      const slider = document.getElementById(sliderName)
      const thumb = document.getElementById(thumbName)

      const sliderArea = slider.getBoundingClientRect()
      const thumbArea = thumb.getBoundingClientRect()

      if (clickX >= thumbArea.left - buffer && clickX <= thumbArea.right + buffer) {
        //ignore click if near thumb
        return
      }
      if(sliderType === 'progress'){
        if (isPlaying) {
          setShowLoading(true)
         }
         const newTime = Math.floor((clickX - sliderArea.left) / durationWidth * duration)
         player.seekTo(newTime)
         setProgress(newTime)
      }
      else {
        const newVolume = Math.floor((clickX - sliderArea.left) / volumeWidth * 100)
        player.setVolume(newVolume)
        setVolume(newVolume)
      }
    }
  }

  const initHideListener = () => {
    let timer
    const parent = document.getElementById(`parent-${ videoId }`)

    const inactiveLisnter = (e) => {
      e.preventDefault()
      setInactive(false)

      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        setInactive(true)
      }, 3000)
    }

    parent.addEventListener("mousemove", inactiveLisnter)
    parent.addEventListener("touchmove", inactiveLisnter)

    return () => {
      parent.removeEventListener("mousemove", inactiveLisnter)
      parent.removeEventListener("touchmove", inactiveLisnter)
    }
  }

  const onThumbDown = (e) => {
    e.preventDefault()

    let parent, setter

    if (e.target.id === `progressThumb-${ videoId }`) {
      parent = document.getElementById(`progressSlider-${ videoId }`)
      setter = handleProgressChange
      parent.setAttribute("data-is-progress-drag", true) //allows interval to know if slider is being dragged
    } else if (e.target.id === `volumeThumb-${ videoId }`) {
      parent = document.getElementById(`volumeSlider-${ videoId }`)
      setter = handleVolumeChange
    }
    document.onmousemove = trackThumb(e.target, parent, setter)
    document.onmouseup = onThumbUp

    document.ontouchmove = trackThumb(e.target, parent, setter, true)
    document.ontouchend = onThumbUp
  }

  const onThumbUp = (e) => {
    e.preventDefault()
    setPlaying((prev) => {
      if (prev) {
        setShowLoading(true)
      }
      return prev
    })
    const progressSlider = document.getElementById(`progressSlider-${ videoId }`)
    if (progressSlider.getAttribute("data-is-progress-drag") === "true") {
      setProgress((prev) => {
        player.seekTo(prev, true)
        return prev
      })
    }


    document.onmousemove = null
    document.onmouseup = null

    document.ontouchmove = null
    document.ontouchend = null

    progressSlider.setAttribute("data-is-progress-drag", false)
  }

  const trackThumb = (thumb, parent, setter, isMobile = false) => {
    setShowTimestamp(true)
    if (!parent) return null
    let currX
    const thumbOffset = Math.floor(thumbRadius / 2)
    const leftBound = -1 * thumbOffset
    const rightBound = parent.getBoundingClientRect().width - thumbOffset
    return (e) => {
      if (!currX) {
        //start of drag
        currX = isMobile ? e.changedTouches[0].clientX : e.clientX
      } else {
        const movement = (isMobile ? e.changedTouches[0].clientX : e.clientX) - currX
        const newThumbX = thumb.offsetLeft + movement
        if (newThumbX < leftBound) {
          thumb.style.left = leftBound
        } else if (newThumbX > rightBound) {
          thumb.style.left = rightBound
        } else {
          thumb.style.left = `${ newThumbX }px` //not updating
        }
        setter(newThumbX)
        currX = isMobile ? e.changedTouches[0].clientX : e.clientX
      }
    }
  }

  const getTimestamp = () => {
    const minutes = Math.floor(progress / 60)
    const seconds = `${Math.floor(progress % 60)}`.padStart(2, "0")
    return `${ minutes }:${ seconds }`
  }


  const onPlayerClick = (e) => {
    e.preventDefault()
    if (!onControls) {
      if (isPlaying) {
        setPlaying(true)
        setShowLoading(false)
      } else {
        setPlaying(false)
        setInactive(false)
      }
      togglePlay()
    }
  }
  return (
    <div id={`parent-${ videoId }`} className={`${ styles.parentContainer } ${ containerClassName ? containerClassName : "" } `} style={{ cursor: (inactive) ? "none" : "default" }} onClick={onPlayerClick}>
      <div id={`player-${ videoId }`} className={styles.video}></div>
      {!isPlaying && (
        <>
          {
            (showLoading)
              ? <div className={`${ styles.playButton } ${ styles.loadingContainer } `}>{loadingAnim}</div>
              : <div className={`${styles.playButton} ${styles.playBorder}`} onClick={() => player.playVideo()} style={{ backgroundColor: playButtonColor }}>
                <VideoPlay></VideoPlay>
              </div>
          }
        </>
      )}
      <div className={styles.controlsContainer}
        onMouseEnter={() => setOnControls(true)}
        onMouseLeave={() => {
          setShowTimestamp(false)
          setOnControls(false)
        }}
        style={{ opacity: (inactive) ? 0 : 1 }}
      >
        <div className={styles.controls}>
          <div onClick={togglePlay}>
            {isPlaying ? <VideoPause className={`${ styles.button } ${ styles.play } `} /> : <VideoPlay className={`${ styles.button } ${ styles.play } `} />}
          </div>
          <div id={`progressSlider-${ videoId }`} onClick={handleSliderClick('progress')} className={styles.progressBar} style={{ backgroundColor: `${ sliderSecondaryColor }80` }}>
            <div
              id={`progressThumb-${ videoId }`}
              className={styles.thumb}
              onMouseDown={onThumbDown}
              onTouchStart={onThumbDown}
              onMouseEnter={() => setShowTimestamp(true)}
              style={{
                width: `${ thumbRadius }px`,
                height: `${ thumbRadius }px`,
                left: `${ (progress / duration) * durationWidth - thumbRadius / 2 }px`,
                top: `${ (thumbRadius < 20) ? (-1 * thumbRadius / 4) : (-1 * thumbRadius / 4 - 2) }px`,
                backgroundColor: sliderPrimaryColor
              }}
            >
              {showTimestamp &&
                <div
                  className={styles.progressDisplay}
                >
                  {getTimestamp()}
                </div>
              }
            </div>
            <div className={styles.innerBar} style={{ width: `${ (progress / duration) * durationWidth }px`, background: sliderPrimaryColor }}></div>
          </div>
          <div className={styles.volumeContainer}>
            {getVolumeIcon()}
            <div id={`volumeSlider-${ videoId }`} onClick={handleSliderClick('volume')} className={styles.volumeBar} style={{ backgroundColor: `${ sliderSecondaryColor }80` }}>
              <div
                id={`volumeThumb-${ videoId }`}
                className={styles.thumb}
                onMouseDown={onThumbDown}
                onTouchStart={onThumbDown}
                style={{
                  width: `${ thumbRadius }px`,
                  height: `${ thumbRadius }px`,
                  left: `${ (volume / 100) * volumeWidth - thumbRadius / 2 }px`,
                  top: `${ (thumbRadius < 20) ? (-1 * thumbRadius / 4) : (-1 * thumbRadius / 4 - 2) }px`,
                  backgroundColor: sliderPrimaryColor
                }}
              ></div>
              <div className={styles.innerBar} style={{ width: `${ (volume / 100) * volumeWidth }px`, background: sliderPrimaryColor }}></div>
            </div>
          </div>
          <div onClick={toggleFullscreen}>
            {isFullscreen ? (
              <ExitFullscreen className={styles.button} />
            ) : (
                <EnterFullscreen className={styles.button} />
              )}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default VideoPlayer
