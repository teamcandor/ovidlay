# ovidlay
Fully customizable YouTube video overlay for React

## Usage

To use ovidlay all you need is the videoId of the YouTube video you want to add to your page:
![image](https://user-images.githubusercontent.com/24358521/89207654-13582100-d589-11ea-9c3d-4ee4365dc57e.png)

```javascript
import Ovidlay from "ovidlay"

...

<Ovidlay 
  videoId="g1iC1h8Nt68" 
  containerClassName="player"
  playButtonColor="#162363"
  sliderPrimaryColor="#fedf67"
  sliderSecondaryColor="#ffffff"
>
  <div style={{position: 'absolute', top: "25%", width: "100%"}}>
    <h1 style={{textAlign: "center"}}>
      Sample Text
    </h1>
  </div>
</Ovidlay>
```
![image](https://user-images.githubusercontent.com/24358521/89574212-c8911000-d7f9-11ea-91aa-2eafd1eaa01a.png)

## Props

Name | Type | Required | Description
--- | --- | --- | ---
videoId | string | Y | YouTube video id to be used by the video player
containerClassName | string | N | Class Name to be applied to the component (components default styling uses height & width 100%)
playButtonColor | string | N | Background color for the play button, defaults to black (#000000)
sliderPrimaryColor | string | N | Color of the progress and volume sliders in the overlay controls, defaults to red (#ff0000)
sliderSecondaryColor | string | N | Color of progress and volume slider backgrounds, defaults to white (#ffffff) 

## Contribute

Issues, Pull Requests, and feedback are all welcome!

Built and maintained by [Candor](https://candor.co)

