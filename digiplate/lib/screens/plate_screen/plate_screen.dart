import 'package:flutter/services.dart';
import 'package:noise_meter/noise_meter.dart';
import 'package:flutter/material.dart';
import 'dart:async';

class PlateScreen extends StatefulWidget {
  @override
  _PlateScreenState createState() => _PlateScreenState();
}

class _PlateScreenState extends State<PlateScreen>
    with TickerProviderStateMixin {
  bool _isRecording = true;
  StreamSubscription<NoiseReading>? _noiseSubscription;
  late NoiseMeter _noiseMeter;
  bool accident = false;
  late AnimationController animation;
  late Animation<double> _fadeInFadeOut;

  @override
  void initState() {
    super.initState();
    _noiseMeter = new NoiseMeter(onError);

    animation = AnimationController(
      vsync: this,
      duration: Duration(seconds: 1),
    );
    _fadeInFadeOut = Tween<double>(begin: 0.0, end: 3).animate(animation);

    animation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        animation.reverse();
      } else if (status == AnimationStatus.dismissed) {
        animation.forward();
      }
    });
    animation.forward();
  }

  @override
  void dispose() {
    _noiseSubscription?.cancel();
    super.dispose();
  }

  void onData(NoiseReading noiseReading) {
    this.setState(() {
      if (!this._isRecording) {
        this._isRecording = true;
      }
    });
    if (noiseReading.maxDecibel > 90) {
      print("Accident Reported");
      this.setState(() {
        this.accident = true;
      });
    }
  }

  void onError(Object e) {
    print(e.toString());
    _isRecording = false;
  }

  void start() async {
    try {
      _noiseSubscription = _noiseMeter.noiseStream.listen(onData);
    } catch (err) {
      print(err);
    }
  }

  void stop() async {
    try {
      if (_noiseSubscription != null) {
        _noiseSubscription!.cancel();
        _noiseSubscription = null;
      }
      this.setState(() {
        this._isRecording = false;
      });
    } catch (err) {
      print('stopRecorder error: $err');
    }
  }

  List<Widget> getContent() => <Widget>[
        Container(
            margin: EdgeInsets.all(25),
            child: Column(children: [
              Container(
                child: Text(_isRecording ? "Mic: ON" : "Mic: OFF",
                    style: TextStyle(fontSize: 25, color: Colors.blue)),
                margin: EdgeInsets.only(top: 20),
              )
            ])),
      ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xffE07715),
        body: Center(
          child: Column(
            children: <Widget>[
              Padding(padding: EdgeInsets.only(top: 20)),
              Image.asset('assets/images/disabled.jpg'),
              Padding(padding: EdgeInsets.only(top: 10)),
              Text(' '),
              Text(
                'HTN 2021',
                style: TextStyle(
                    fontSize: 150,
                    fontWeight: FontWeight.bold,
                    color: Colors.black),
              ),
              Padding(padding: EdgeInsets.only(top: 0)),
              Text(' '),
              if (!accident)
                Text(
                  'ONTARIO',
                  style: TextStyle(fontSize: 45, color: Colors.black),
                ),
              if (accident)
                FadeTransition(
                  opacity: _fadeInFadeOut,
                  child: Container(
                      color: Colors.green,
                      width: 600,
                      height: 40,
                      child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Text(
                              'ACCIDENT',
                              style: TextStyle(fontSize: 34.0),
                            )
                          ])),
                ),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          backgroundColor: _isRecording ? Color(0xffE07715) : Colors.green,
          onPressed: _isRecording ? stop : start,
          elevation: 0,
        ),
      ),
    );
  }
  /*backgroundColor: const Color(0xffFFFFFF),
        body: Center(
            child: Text(
          'HTN 2021',
          style: TextStyle(
              fontSize: 150, fontWeight: FontWeight.bold, color: Colors.black),
        )));*/
  /*}*/
}
