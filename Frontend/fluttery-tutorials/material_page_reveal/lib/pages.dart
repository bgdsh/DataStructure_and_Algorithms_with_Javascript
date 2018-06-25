
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

final pages = [
  new PageViewModel(
      Colors.amberAccent,
      "assets/banks.png",
      "Banks",
      "Hello from banks",
      "assets/key.png"
  ),
  new PageViewModel(
      Colors.blue,
      "assets/hotels.png",
      "Hotels",
      "Hello from hotels",
      "assets/wallet.png"
  ),
  new PageViewModel(
      Colors.purpleAccent,
      "assets/stores.png",
      "Stores",
      "Hello from stores",
      "assets/shopping_cart.png"
  )
];

class Page extends StatelessWidget {
  final PageViewModel viewModel;
  final double percentVisible;

  Page({this.viewModel, this.percentVisible = 1.0,});

  @override
  Widget build(BuildContext context) {
    return new Container(
      width: double.infinity,
      color: viewModel.color,
      child: new Opacity(
        opacity: percentVisible,
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Transform(
              transform: new Matrix4.translationValues(
                  0.0,
                  50.0 * (1.0-percentVisible),
                  0.0
              ),
              child: new Padding(
                padding: const EdgeInsets.only(
                    bottom: 20.0
                ),
                child: new Image.asset(
                  viewModel.heroAssetPath,
                  width: 200.0,
                  height: 200.0,
                ),
              ),
            ),
            new Transform(
              transform: new Matrix4.translationValues(
                  0.0,
                  30.0 * (1.0-percentVisible),
                  0.0
              ),
              child: new Padding(
                padding: const EdgeInsets.only(
                  top: 10.0,
                  bottom: 10.0,
                ),
                child: new Text(
                  viewModel.title,
                  style: new TextStyle(
                    color: Colors.white,
                    fontFamily: "FlamanteRoma",
                    fontSize: 34.0,
                  ),
                ),
              ),
            ),
            new Transform(
              transform: Matrix4.translationValues(
                  0.0,
                  30.0 * (1.0-percentVisible),
                  0.0
              ),
              child: new Padding(
                padding: const EdgeInsets.only(
                  top: 70.0,
                ),
                child: new Text(
                  viewModel.body,
                  textAlign: TextAlign.center,
                  style: new TextStyle(
                    color: Colors.white,
                    fontSize: 18.0,
                  ),
                ),
              ),
            ),
          ],

        ),
      ),
    );
  }
}

class PageViewModel {
  final Color color;
  final String heroAssetPath;
  final String title;
  final String body;
  final String iconAssetPath;

  PageViewModel(
      this.color,
      this.heroAssetPath,
      this.title,
      this.body,
      this.iconAssetPath,
      );
}