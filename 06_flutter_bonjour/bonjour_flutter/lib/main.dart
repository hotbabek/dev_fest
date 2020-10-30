import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO utilisation du widget MaterialApp
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text(
          'Bonjour App',
        ),
        backgroundColor: Color(0xFFb74093),
      ),
      body: SingleChildScrollView(
          child: Center(
        child: Column(
          children: [
            Text(
              'Bonjour',
              style: TextStyle(
                  color: Color(0xFFb74093),
                  fontWeight: FontWeight.bold,
                  fontSize: 40),
            ),
            Text('Je suis Gaël',
                style: TextStyle(color: Color(0xFFb74093), fontSize: 40)),
            Image.network(
              "https://i.pinimg.com/originals/b5/c6/d2/b5c6d29fc8dcc50d3f88b50b69aff86f.jpg",
              height: 350,
            ),
            BoutonContactezMoi(),
            Text('Texte 4'),
          ],
        ),
      )),
    ));
  }
}

class BoutonContactezMoi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO code du bouton "Contactez-moi" à compléter
    return ElevatedButton(
        style: ElevatedButton.styleFrom(
          // background color
          primary: Color(0xFFb74093),
        ),
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text('Contactez-moi'),
                content: Text('Je suis joignable à l\'IMT Atlantique'),
              );
            }),
        child: Text("Contactez-moi"));
  }
}
