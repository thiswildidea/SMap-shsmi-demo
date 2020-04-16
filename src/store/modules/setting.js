import db from '@/utils/localstorage'
import { getLanguage } from '@/lang/index'

export default {
  namespaced: true,
  state: {
    maptoken: db.get('MAP_TOKEN', ''),
    newmaptoken: db.get('NEWMAP_TOKEN', ''),
    language: getLanguage(),
    maploaded: db.get('MAPLOADED', false),
    map: db.get('MAP', null),
    sceneView: db.get('SCENE_VIEW', null),
    homeWidget: db.get('HOME_WIDGET', null),
    fullscreen: db.get('FULL_SCREEN', null),
    baseMapSwitch: db.get('BASEMAP_SWITCH', null),
    aboveBelowModeSwitch: db.get('ABOVEBELOWMODE_SWITCH', null),
    layerListExpand: db.get('LAYERLIST_EXPAND', null),
    layerList: db.get('LAYERLIST', null),
    mapSceneSwitch: db.get('MAPSCENE_SWITCH', null),
    bMapGalleryExpand: db.get('BASEMAPGALLERY_EXPAND', null),
    bMapGallery_Control: db.get('BASEMAPGALLERY_CONTROL', null),
    measureMent3DToolExpand: db.get('MEASUREMENT3DTOOL_EXPAND', null),
    measureMent3DTool: db.get('MEASUREMENT3DTOOL', null),
    addressLocationSearchExpand: db.get('ADDRESSLOCATIONSEARCH_EXPAND', null),
    addressLocationSearch: db.get('ADDRESSLOCATIONSEARCH', null),
    zoom: db.get('ZOOM', null),
    camera: db.get('CAMERA', null)
  },
  mutations: {
    setMapToken: (state, maptoken) => {
      db.save('MAP_TOKEN', maptoken)
      state.maptoken = maptoken
    },
    setNewMapToken: (state, maptoken) => {
      db.save('NEWMAP_TOKEN', maptoken)
      state.newmaptoken = maptoken
    },
    setLanguage: (state, language) => {
      db.save('LANGUAGE', language)
      state.language = language
    },
    setMapLoaded: (state, maploaded) => {
      db.save('MAPLOADED', maploaded)
      state.maploaded = maploaded
    },
    setMap: (state, map) => {
      db.save('MAP', map)
      state.map = map
    },
    setSceneView: (state, sceneView) => {
      db.save('SCENE_VIEW', sceneView)
      state.sceneView = sceneView
    },
    setHomeWidget: (state, homeWidget) => {
      db.save('HOME_WIDGET', homeWidget)
      state.homeWidget = homeWidget
    },
    setFullscreen: (state, fullscreen) => {
      db.save('FULL_SCREEN', fullscreen)
      state.fullscreen = fullscreen
    },
    setBaseMapSwitch: (state, baseMapSwitch) => {
      db.save('BASEMAP_SWITCH', baseMapSwitch)
      state.baseMapSwitch = baseMapSwitch
    },
    setAboveBelowModeSwitch: (state, aboveBelowModeSwitch) => {
      db.save('ABOVEBELOWMODE_SWITCH', aboveBelowModeSwitch)
      state.aboveBelowModeSwitch = aboveBelowModeSwitch
    },
    setLayLerListExpand: (state, layerListExpand) => {
      db.save('LAYERLIST_EXPAND', layerListExpand)
      state.layerListExpand = layerListExpand
    },
    setLayLerList: (state, layerList) => {
      db.save('LAYERLIST', layerList)
      state.layerList = layerList
    },
    setMapSceneSwitch: (state, mapSceneSwitch) => {
      db.save('MAPSCENE_SWITCH', mapSceneSwitch)
      state.mapSceneSwitch = mapSceneSwitch
    },
    setBMapGalleryExpand: (state, bMapGalleryExpand) => {
      db.save('BASEMAPGALLERY_EXPAND', bMapGalleryExpand)
      state.bMapGalleryExpand = bMapGalleryExpand
    },
    setBMapGallery_Control: (state, bMapGallery_Control) => {
      db.save('BASEMAPGALLERY_CONTROL', bMapGallery_Control)
      state.bMapGallery_Control = bMapGallery_Control
    },
    setMeasureMent3DToolExpand: (state, measureMent3DToolExpand) => {
      db.save('MEASUREMENT3DTOOL_EXPAND', measureMent3DToolExpand)
      state.measureMent3DToolExpand = measureMent3DToolExpand
    },
    setMeasureMent3DTool: (state, measureMent3DTool) => {
      db.save('MEASUREMENT3DTOOL', measureMent3DTool)
      state.measureMent3DTool = measureMent3DTool
    },
    setAddressLocationSearchExpand: (state, addressLocationSearchExpand) => {
      db.save('ADDRESSLOCATIONSEARCH_EXPAND', addressLocationSearchExpand)
      state.addressLocationSearchExpand = addressLocationSearchExpand
    },
    setAddressLocationSearch: (state, addressLocationSearch) => {
      db.save('ADDRESSLOCATIONSEARCH', addressLocationSearch)
      state.addressLocationSearch = addressLocationSearch
    },
    setZoom: (state, zoom) => {
      db.save('ZOOM', zoom)
      state.zoom = zoom
    },
    setCamera: (state, camera) => {
      db.save('ADDRESSLOCATIONSEARCH', camera)
      state.camera = camera
    }
  }
}
