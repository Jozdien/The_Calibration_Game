package com.the_calibration_game;
import android.os.Bundle; //changed
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; //changed

public class MainActivity extends ReactActivity {

   /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
   */
	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    SplashScreen.show(this, R.style.SplashScreenTheme);  // changed
	    super.onCreate(savedInstanceState);
	}
	protected String getMainComponentName() {
	    return "The_Calibration_Game";
	}
}
