import 'package:flutter/material.dart';

class LocationDetail extends StatelessWidget {
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
              Padding(padding: EdgeInsets.only(top: 20)),
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
              Text(
                'ONTARIO',
                style: TextStyle(fontSize: 45, color: Colors.black),
              )
            ],
          ),
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
