import React, { lazy, Component, Suspense } from 'react';
import dataHandler from '../dataHandler';

import Camera from 'react-feather/dist/icons/camera';
import ArrowDown from 'react-feather/dist/icons/arrow-down';

const Video = lazy(() => import('../Video'));

import './cameraHandler.css';

class CameraHandler extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      isCameraSupported: false,
      isCamEnabled: dataHandler.isCameraPermissionGranted()
    };
  }

  onCamEnabled = () => {
    dataHandler.cameraPermissionGranted();
    this.setState({
      isCamEnabled: true
    });
  }

  componentWillMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.setState({
        isCameraSupported: true
      });
    }
  }

  render() {
    return (
      <>
        {this.state.isCameraSupported ?
          this.state.isCamEnabled ?
          <Suspense fallback={<div>Loading...</div>}>
            <Video />
          </Suspense>
          :
          <div className="cameraHandler__message">Click The Button Below To Enable Your Camera
          <br/>
          <div className="cameraHandler__messageIcon"><ArrowDown size={30}/></div>
          </div>
          :
          <div>Sorry, Your Camera Is Not Supported </div>
        }
        {this.state.isCamEnabled ?
          ''
          :
          <button aria-label="Enable Camera" className="btn__round camera__enable" onClick={this.onCamEnabled}>
            <Camera />
          </button>
        }
      </>
    );
  }
}

export default CameraHandler;
