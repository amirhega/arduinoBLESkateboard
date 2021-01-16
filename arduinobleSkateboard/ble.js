import React, {Component} from 'react';
import { BleManager } from 'react-native-ble-plx';

export default class ble extends React.Component {
	constructor() {
	    super();
	    this.manager = new BleManager();
	}

	componentWillMount() {
	    const subscription = this.manager.onStateChange((state) => {
	        if (state === 'PoweredOn') {
	            this.scanAndConnect();
	            subscription.remove();
	        }
	    }, true);
	}

	scanAndConnect() {
	    this.manager.startDeviceScan(null, null, (error, device) => {
	        if (error) {
	            // Handle error (scanning will be stopped automatically)
	            
	            return
	        }
	        //if(device.localName === "Nano33BLE " && device.localName != null) {
	        console.log(device.localName)
	       
	    	//}
	    	
	        // Check if it is a device you are looking for based on advertisement data
	        // or other criteria.
	        if (device.name === 'Nano33BLE' || device.name === 'Arduino') {
	            
	            // Stop scanning as it's not necessary if you are scanning for one device.
	            this.manager.stopDeviceScan();

	            // Proceed with connection.
	            device.connect()
	                .then((device) => {
	                    return device.discoverAllServicesAndCharacteristics()
	                })
	                .then((device) => {
	                   // Do work on device with services and characteristics
	                   alert('Nano33BLE');
	                   //this.device.cancelDeviceConnection();
	                })
	                .catch((error) => {
	                    // Handle errors
	                    alert('no');
	                });
	        }

	    });
	}

	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

