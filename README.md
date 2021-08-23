![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

<br>

# [JEST-BrowserStack](https://github.com/Bhagyesh22/JEST-BrowserStack)

This Repository is the demo repository which uses JEST with Selenium WebDriver to run JS based unit test on BROWSERSTACK 

&nbsp;
# [BROWSERSTACK](https://www.browserstack.com/)

BrowserStack is an Indian cloud web and mobile testing platform that provides developers with the ability to test their websites and mobile applications across on-demand browsers, operating systems and real mobile devices


&nbsp;
# [ABOUT JEST](https://jestjs.io/)
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.


&nbsp;
# INITIAL SETUP
SET THE ENVIRONMENT VARIABLES 

&nbsp;
<H3><U>FOR WINDOW USERS</U></H3>

&nbsp;
SET BROWSERSTACK_USERNAME=YOUR-BROWSERSTACK-USERNAME

&nbsp;
SET BROWSERSTACK_ACCESSKEY=YOUR-BROWSERSTACK-ACCESSKEY

&nbsp;
<H3><U>FOR MAC/LINUX USERS</U></H3>

&nbsp;
export BROWSERSTACK_USERNAME=YOUR-BROWSERSTACK-USERNAME

&nbsp;
export BROWSERSTACK_ACCESSKEY=YOUR-BROWSERSTACK-ACCESSKEY

&nbsp;
&nbsp;
<p>You could also pass <u>BROWSERSTACK-USERNAME</u> AND <u>BROWSERSTACK-ACCESS-KEY</u> in driverfactory.js in the form of hard coded string.</p>


&nbsp;
# TO RUN YOUR TEST
Do Ensure that you have completed INITIAL SETUP STEP.



Go To Project's Root Directory


<br>
<ul>

<li>TO INSTALL ALL DEPENDENCIES , USE COMMAND</li>


npm install

<br>



<li>TO RUN SINGLE TEST , USE COMMAND</li>


npm run single
<br>


<br>

<li>TO RUN PARALLEL TEST'S , USE COMMAND</li>



npm run parallel

<br>

<li>TO RUN LOCAL TEST , USE COMMAND</li>




npm run local
</ul>

<br>

<p>
Note: While doing Local Testing , replace the URL in Local.js(Line Number-20) with your Locally Hosted Application's URL</p>













