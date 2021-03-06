import React, { useState, useEffect } from "react"

import styles from "./VideoPlayer.module.css"

import VideoPause from "../../vector/icons/video_pause.svg"
import VideoPlay from "../../vector/icons/video_play.svg"
import EnterFullscreen from "../../vector/icons/video_enter_fullscreen.svg"
import ExitFullscreen from "../../vector/icons/video_exit_fullscreen.svg"
import VolumeMute from "../../vector/icons/video_volume_mute.svg"
import VolumeLow from "../../vector/icons/video_volume_low.svg"
import VolumeMed from "../../vector/icons/video_volume_med.svg"
import VolumeMax from "../../vector/icons/video_volume_max.svg"

const VideoPlayer = ({ children, videoId, height, width }) => {
  const durationWidth = 300
  const volumeWidth = 80
  const thumbRadius = 20

  const [player, setPlayer] = useState(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isFullscreen, setFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(200)
  const [volume, setVolume] = useState(100)
  const [progressInterval, setProgressInterval] = useState(null)

  useEffect(() => {
    setPlayer(
      new YT.Player(`player-${videoId}`, {
        videoId,
        playerVars: {
          controls: 0,
          enablejsapi: 1,
          rel: 0,
          fs: 0,
          cc_lang_pref: "en",
          cc_load_policy: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    )
    const changeFullscreen = () => {
      const parentHeight = document.getElementById(`parent-${videoId}`).offsetHeight
      setFullscreen(window.innerHeight === parentHeight)
    }
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
    return () => clearInterval(progressInterval)
  }, [progressInterval])

  const onPlayerReady = (e) => {
    setProgressInterval(setInterval(() => updateProgress(e), 1000))
    setDuration(e.target.getDuration())
    e.target.setVolume(volume)
  }

  const onPlayerStateChange = (e) => {
    if (e.data === YT.PlayerState.PLAYING) {
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }

  const updateProgress = (e) => {
    //checks if dragging progress bar
    const sliderStatus = document.getElementById("progressSlider").getAttribute("data-is-progress-drag")
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
      return <VolumeMute className={styles.button} />
    } else if (volume < 33) {
      return <VolumeLow className={styles.button} />
    } else if (volume < 66) {
      return <VolumeMed className={styles.button} />
    } else {
      return <VolumeMax className={styles.button} />
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
    player.seekTo(val)
  }

  const handleVolumeChange = (x) => {
    const val = convertThumbToValue(x, volumeWidth, 100)
    setVolume(val)
    player.setVolume(val)
  }

  const onThumbDown = (e) => {
    e.preventDefault()

    let parent, setter

    if (e.target.id === "progressThumb") {
      parent = document.getElementById("progressSlider")
      setter = handleProgressChange
      parent.setAttribute("data-is-progress-drag", true) //allows interval to know if progress is being dragged
    } else if (e.target.id === "volumeThumb") {
      parent = document.getElementById("volumeSlider")
      setter = handleVolumeChange
    }
    document.onmousemove = trackThumb(e.target, parent, setter)
    document.onmouseup = onThumbUp

    document.ontouchmove = trackThumb(e.target, parent, setter, true)
    document.ontouchend = onThumbUp
  }

  const onThumbUp = (e) => {
    e.preventDefault()

    document.onmousemove = null
    document.onmouseup = null

    document.ontouchmove = null
    document.ontouchend = null

    document.getElementById("progressSlider").setAttribute("data-is-progress-drag", false)
  }

  const trackThumb = (thumb, parent, setter, isMobile = false) => {
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
          thumb.style.left = `${newThumbX}px` //not updating
        }
        setter(newThumbX)
        currX = isMobile ? e.changedTouches[0].clientX : e.clientX
      }
    }
  }

  return (
    <div id={`parent-${videoId}`} className={styles.parentContainer} style={{height: `${height}px`, width: `${width}px`}}>
      <script src="https://www.youtube.com/iframe_api"></script>
      <div id={`player-${videoId}`} className={styles.video}></div>
      {!isPlaying && (
        <div className={styles.playButton} onClick={() => player.playVideo()}>
          <VideoPlay />
        </div>
      )}
      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <div onClick={togglePlay}>
            {isPlaying ? <VideoPause className={styles.button} /> : <VideoPlay className={styles.button} />}
          </div>
          <div id="progressSlider" className={styles.progressBar} style={{ width: `${durationWidth}px` }}>
            <div
              id="progressThumb"
              className={styles.thumb}
              onMouseDown={onThumbDown}
              onTouchStart={onThumbDown}
              style={{
                width: `${thumbRadius}px`,
                height: `${thumbRadius}px`,
                left: `${(progress / duration) * durationWidth - thumbRadius / 2}px`,
                top: `${-1 * thumbRadius / 4}px`
              }}
            ></div>
            <div className={styles.innerBar} style={{ width: `${(progress / duration) * durationWidth}px` }}></div>
          </div>
          <div className={styles.volumeContainer}>
            {getVolumeIcon()}
            <div id="volumeSlider" className={styles.volumeBar} style={{ width: `${volumeWidth}px` }}>
              <div
                id="volumeThumb"
                className={styles.thumb}
                onMouseDown={onThumbDown}
                onTouchStart={onThumbDown}
                style={{
                  width: `${thumbRadius}px`,
                  height: `${thumbRadius}px`,
                  left: `${(volume / 100) * volumeWidth - thumbRadius / 2}px`,
                  top: `${-1 * thumbRadius / 4}px`
                }}
              ></div>
              <div className={styles.innerBar} style={{ width: `${(volume / 100) * volumeWidth}px` }}></div>
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
