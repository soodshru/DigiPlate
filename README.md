# DigiPlate
A revolutionary idea that digitizes number plates for the prevention of vehicle accidents. DigiPlate consists of a digital plate that attaches to your car, the Copilot app which acts as an assistant to make your driving safer and more comfortable, and a blockchain-based backend to securely exchange insurance details between vehicles in the event of a crash.

# Table of Contents
* [Introduction](https://github.com/soodshru/DigiPlate#introduction)
* [Technologies](https://github.com/soodshru/DigiPlate#technologies)
* [Requirements](https://github.com/soodshru/DigiPlate#requirements)
* [Features](https://github.com/soodshru/DigiPlate#features)
* [Status](https://github.com/soodshru/DigiPlate#status)

## Introduction
Road accidents are one of the biggest causes of death in the world today. The WHO estimates that approximately 1.3 million people die each year as a result of traffic accidents. Furthermore, injuries leading to vehicle crashes are the leading cause of death for children and young adults aged 5-29 years. Such accidents also cost countries 3% of their GDP annually. DigiPlate was conceived as a response to these challenges and also motivated by the recent loss of close friends to unfortunate road accidents. We aim to transform the industry by accelerating the pace of digitalisation whilst leveraging the latest technologies to provide a trusted, secure experience.

We made a video about our product. Check it out here!: https://youtu.be/LZTnflFQaQE

Coda doc used for collaboration : https://coda.io/@shruti-sood/hack-the-north

## Technologies
This project consists of a Copilot web app written in React that interfaces with an Ethereum smart contract written in Solidity and with Cockroach DB through a Go API. We also have a Flutter app that simulates a digital license plate.

## Requirements
This project requires the following libraries and frameworks:

* Go (tested on v1.17.1)
* React
* Flutter
* Cockroach DB (we used the remote cluster)

Instructions to run each of the components are in their respective README.md files.

## Features
DigiPlate's features can be segregated into 3 categories based on what timeline of the accident they address:

Accident Prevention
- Alerts you if there is a reckless driver around you in a set radius
- Numerous icons to warn fellow drivers of potential hazards
- Unique background colours for driver classification (flagged or normal)
- Easily report hazardous drivers around you

During Accident
- Call ambulance automatically if user does not respond to a safety prompt in a specified period of time
- Exchange insurance information over a blockchain network for secure transfer of data

Post Accident
- License plates of all involved in an accident is recorded and stored securely in an encrypted database so hit and run cases can be tracked down easier

## Status
As of 19th September 2021, the project is still active. We have an ambitious future roadmap that involves digitising every aspect of a car owner's life while providing a high level of security and trust by leveraging the power of blockchain.
