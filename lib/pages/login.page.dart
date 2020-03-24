
import 'package:flutter/material.dart';
import 'package:test_pierrick_v2/widget/button.dart';
import 'package:test_pierrick_v2/widget/first.dart';
import 'package:test_pierrick_v2/widget/forgot.dart';
import 'package:test_pierrick_v2/widget/inputName.dart';
import 'package:test_pierrick_v2/widget/inputPassword.dart';
import 'package:test_pierrick_v2/widget/textLogin.dart';
import 'package:test_pierrick_v2/widget/verticalText.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [Colors.blueGrey, Colors.lightBlueAccent]),
        ),
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                Row(children: <Widget>[
                  VerticalText(),
                  TextLogin(),
                ]),
                InputName(),
                PasswordInput(),
                Forgot(),
                ButtonLogin(),
                FirstTime(),
              ],
            ),
          ],
        ),
      ),
    );
  }
}