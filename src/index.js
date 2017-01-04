import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/map.svg',
  trailVisitedColor:'#47DBB4', 
  // trailVisitedColor:'#db46bd', //GR changed to this, but it didn't show up on screen
  fontPresentColor:'#5D5C56',
}).appendTo('.container')
