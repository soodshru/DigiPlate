import 'package:flutter/material.dart';
import 'image_banner.dart';

class LocationDetail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color(0xffFFFFFF),
        body: Center(
            child: Text(
          'HTN 2021',
          style: TextStyle(
              fontSize: 150, fontWeight: FontWeight.bold, color: Colors.black),
        )));
  }
}
