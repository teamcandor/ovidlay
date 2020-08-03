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
  height={500} 
  width={800}
  themeColor="#162363"
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
![image](https://user-images.githubusercontent.com/24358521/89209205-d8a3b800-d58b-11ea-9c65-fe578b1c0857.png)

## Props

Name | Type | Required | Description
--- | --- | --- | ---
videoId | string | Y | YouTube video id to be used by the video player
height | number | Y | height (in pixels) of the video
width | number | Y | width (in pixels) of the video
themeColor | string | N | Background color for the overlay controls, defaults to black (#000000)
sliderPrimaryColor | string | N | Color of the progress and volume sliders in the overlay controls, defaults to red (#ff0000)
sliderSecondaryColor | string } N | color of progress and volume slider backgrounds, defaults to white (#ffffff) 
