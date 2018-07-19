export const changeLog = [
    {
      'date': '19/07/2018',
        'changes': [
        'We made one type of pop-up for the referral page.',
        'Pop-up was adapted on the referral page.',
        'We fixed following to the module page by unauthenticated user.',
        'Service of Trader\'s Behavioral Analysis was connected to the main module.',
        'In the main module, now it\'s possible to save API key for exchanges.',
        'Now it is not necessary to enter API keys to send a request to Service of Trader\'s Behavioral Analysis. Only exchange name is needed.',
        'We added the possibility to send tokens from one user account to another.',
        'The integration between Arbitrage Module and proxy server is finished.',
        'We fixed error display while authentification.',
        'Node was fully tested in the test network with test tokens, we began integration with the real network.'
      ]
    },
    {
        'date': '18/07/2018',
        'changes': [
            'We added the possibility to authorize via email and via login name both.',
            'We began the development of proxy server for access to exchanges to avoid the risk to be banned. Four exchanges were connected.',
            'In Service of Trader\'s Behavioral Analysis, controller, which returned history of user\'s trades, now returns history and statistics on trades.',
            'HTML layout of Smart Trading Module.',
            'Smart Trading Module page was adapted to all screen sizes.',
            'It\'s not necessary now to enter a pair to get deals in Service of Trader\'s Behavioral Analysis (for Binance and HitBTC).',
            'In Service of Trader\'s Behavioral Analysis, the method, which returns a list of the user\'s deals, worked for one exchanges only. Now it works for several exchanges.',
            'Previously, it was necessary for the user to wait a long for request processed if he has never used our service before. Now request is processed faster (in Service of Trader\'s Behavioral Analysis).',
            'Arbitrage Module was partially integrated with the proxy project.'
        ]
    },
    {
        'date': '17/07/2018',
        'changes': [
            'We added an address pool.',
            'If you don\'t replenish your address in two days, it will transition into frozen, binding to the user is saved.',
            'If the user pays during 2 days, funds will be charged within 12 hours. Between second and seventh days, he can give the funds back with the help of the support service. After the eighth day, it won\'t be possible to return funds.',
            'Visual work on enabling/disabling notifications was done.',
            'New exchange, HitBTC, was connected in Service of Trader\'s Behavioral Analysis',
            'In Service of Trader\'s Behavioral Analysis, the logic of getting the history of user trades was changed. (Previously, you should enter a pair manually, now it is entered automatically) (now it\'s for Binance only)'
        ]
    },
    {
        'date': '16/07/2018',
        'changes': [
            'In Social Assistant, we added the function of sending notifications when the relevant tweet comes',
            'In Service of Trader\'s Behavioral Analysis, candles are built now only for deals which do not yet exist in the database. This improves the speed of the work of the module (for Binance)',
            'We fixed a bug which limited a normal program execution in Social Assistant (Twitter API bug)',
            'In Social Assistant, a bug in the method which sends notifications to the user was fixed',
            'In Social Assistant, notification now contains a link to tweet which was linked',
            'We changed buttons in notification settings',
            'We configured switching of all Telegram notifications at frontend',
            'We configured switching of all email notifications at frontend',
            'We added the possibility to get an address in the node to hold tokens and ETH there',
            'The possibility to withdraw tokens was added'
        ]
    },
    {
        'date': '13/07/2018',
        'changes': [
            'HTML layout of the page with global notification settings of all modules',
            'The page with global notification settings of all modules was adapted to all screen sizes',
            'HTML layout of informing pop-up',
            'Informing pop-up was adapted to all screen sizes',
            'Module of Trader\'s Behavioral Analyzer was configured and connected to the main module (for developers only)',
            'We added a few commands to Telegram Assistant',
            'We began the development of wrapping for work with Ethereum node',
            'We added smoothing of difference between user\'s price and the best price',
            'We added the possibility to enable and disable notifications at backend',
            'When you disable a certain way of notification, the configuration of specific types of notifications is saved',
            'The possibility to do mailing with the help of the main module was added',
            'Now you will receive notifications to enabled ways of notification when signing in (now Telegram and mail are available)'
        ]
    },
    {
        'date': '12/07/2018',
        'changes': [
            'In Service of Trader\'s Behavioral Analysis, we added error displaying in case if the user enters incorrect params for interaction with Binance API and Bittrex API (e.g., API key, API secret, Pair)',
            'We added saving of user\'s operations to the database (for Binance and Bittrex) in Service of Trader\'s Behavioral Analysis',
            'In Service of Trader\'s Behavioral Analysis, the method which takes the best price from the nearest candles in dependence on operation type was added (for Bittrex)',
            'We added the method which calculates the percentage of user\'s price of the best rate in dependence on operation type in Service of Trader\'s Behavioral Analysis (for Bittrex)',
            'HTML layout of the page of banned users',
            'The page of banned users was adapted to all screen sizes',
            'The method which calculates user\'s statistics on the history of user transactions was added in Service of Trader\'s Behavioral Analysis',
            'We began the work on connecting Service of Trader\'s Behavioral Analysis to the main module',
            'In Telegram Assistant, we added a possibility to receive notifications from other modules',
            'In Service of Trader\'s Behavioral Analysis, we added a method which calculates statistics on the history of user\'s transactions'
        ]
    },
    {
        'date': '11/07/2018',
        'changes': [
            'We added the possibility to accurately diagnose problems with Arbitrage Module through logging',
            'Now you can execute other commands while searching for windows in Telegram Assistant, your request will be executed in the background',
            'We added a limitation on a number of simultaneous requests for searching windows (not more than 1 request before the previous one is executed)',
            'We began the development of Module of Price Notification',
            'In the dropdown list in the header, layout adaptation for large emails was done',
            'We added the possibility to repass the test at frontend',
            'Errors while trying to change userpic were fixed',
            'Userpic in the header and personal cabinet now changes in real time (new picture will be seen without page reloading)',
            'We fixed the bug of calculating the best price from candles which are the nearest to user\'s deal in Service of Trader\'s Behavioral Analysis',
            'In Service of Trader\'s Behavioral Analysis, the interval of candle building at 12 hours back and 12 hours ahead from user\'s deal was changed (instead of 5 minutes back and 5 minutes ahead) (for Binance and Bittrex)',
            'We added error displaying in case if the user enters incorrect exchange in Service of Trader\'s Behavioral Analysis'
        ]
    },
    {
        'date': '10/07/2018',
        'changes': [
            'Button emoji were added to Telegram Assistant',
            'The work of all modules was stabilized with HitBTC, Huobi, and Kraken',
            'We added the possibility to repass Cryptoacademy tests at backend',
            'JUnit tests for Social Assistant were fixed in the main module',
            'If subscription ends while using Social Assistant, errors will be displayed',
            'If the word, which is being added to the dictionary, doesn\'t pass validation, errors will be displayed in Social Assistant',
            'HTML layout of pop-up on Anomalous Volume Dynamics Analyzer page',
            'Pop-up on  Anomalous Volume Dynamics Analyzer page was adapted to all screen sizes',
            'HTML layout of Module of Cryptocurrency Portfolios Management',
            'Module of Cryptocurrency Portfolios Management page was adapted to all screen sizes',
            'We added the possibility to unlink Telegram Assistant from your FTEC account'
        ]
    },
    {
        'date': '09/07/2018',
        'changes': [
            'We added dictionary limitation to Social Assistant (50 words for a user). Now module controllers ' +
            '(add a word, delete a word, delete all words) return the number of free lots (how many words the user' +
            'can add)',
            'In Social Assistant, all controllers are modified. Now they accept user id in headers, not in request params',
            'In the main module, we modified all controllers which interact with Social Assistant',
            'Twitter properties for production, staging, and test run were added in Social Assistant',
            'Method of subscription verification was moved to Social Assistant',
            'HTML layout of Anomalous Volume Dynamics Analyzer page',
            'Anomalous Volume Dynamics Analyzer page was adapted to all screen sizes',
            'News Background Analyzer page was adapted to all screen sizes',
            'HTML layout of News Background Analyzer page',
            'The main module and Arbitrage Assistant don\'t accept incorrect data for windows search (negative values, closed exchanges)',
            'Pop-up dictionary in Telegram Assistant was improved, now it can appear by pressing the button when you attempt to delete a word',
            'Now user can\'t get access code after connecting Telegram account and his FTEC account'
        ]
    },
    {
        'date': '06/07/2018',
        'changes': [
            'We added a method  which searches and returns all transactions of the user in the Service of Traders ' +
            'Behavioral Analysis module (Bittrex)',
            'We added a method that searches for the nearest candles for the transaction of the user (for Bittrex)',
            'HTML-layout of the page of the Exchange of the Trading Recommendations Platform',
            'The Trading Recommendations Platform page is adapted for all screen sizes',
            'The HTML layout of the Anomalous Volume Analyzer page is started',
            'The opportunity of initial adjustment the Telegram Assistant is realized at frontend',
            'We checked the test modules for the Cryptoacademy',
            'We improved display of information from modules in the Telegram Assistant',
            'We configured test server of the Telegram Assistant',
            'We fixed bugs which were detected during interaction with  the Telegram Assistant'
        ]
    },
    {
        'date': '05/07/2018',
        'changes': [
            'We added search of the nearest candle for each deal in Module of Trader\'s Behavioral Analysis (for Binance)',
            'We added method which takes the best price of all available, depending on operation type in Module ' +
            'of Trader\'s Behavioral Analysis (Binance)',
            'In Module of Trader\'s Behavioral Analysis, method, which calculate the percentage of user\'s profit ' +
            'of the best price depending on operation type, was added (for Binance)',
            'We added controller which returns a list of closed deals of users in Module of Trader\'s Behavioral Analysis (for Binance)',
            'We added controller which returns a list of recommendations for users, depending on operation type ' +
            'in Module of Trader\'s Behavioral Analysis (for Binance)',
            'HTML layout of Exchange Order Management Module page',
            'Exchange Order Management Module was adapted to all screen sizes',
            'HTML layout of Global Price Analyzer page',
            'Global Price Analyzer page was adapted to all screen sizes',
            'We added the possibility to work with Adaptive Social Assistant in Telegram Assistant',
            'The possibility for user to connect Telegram Assistant was implemented at backend'
        ]
    },
    {
        'date': '04/07/2018',
        'changes': [
            'HTML layout of Module of Price Notification page',
            'The size of Module of Price Notification page was adapted to all screen sizes',
            'HTML layout of custom range slider',
            'We finished the implementation of Cryptoacademy tests at frontend. The first tes' +
            't will be available for all users just after the end of testing',
            'The method, which searches tweets in Social Assistant, check if a tweet is relevant now',
            'We added method which closes Twitter Stream API before closure of the program to Social ' +
            'Assistant (fix of memory leak on the server)',
            'The connection of Binance and Bittrex to exchange API was set in Service of Trader\'s Behavioral Analysis',
            'Now it is possible to verify the validity of API keys from Binance and Bittrex in Service of Trader\'s Behavioral Analysis',
            'We added a possibility to save closed operations from Binance to the database',
            'Animation of dropdown lists was added',
            'We added exceptions handling while script execution in Telegram Assistant'
        ]
    },
    {
        'date': '03/07/2018',
        'changes': [
            'We connected Kraken to the main and Telegram module',
            'We connected Binance API to Service of Trader\'s Behavioral Analysis',
            'Testing of connection to Binance API',
            'We added Google ReCaptcha to prevent spam while registration of a new user',
            'Basic functions to pass test were implemented at frontend',
            'To prevent a large number of requests from one IP address, we added fixation and sending of ' +
            'IP appliance from which requests are made to backend, where we will add data processing and score ' +
            'of users with suspicious activity',
            'The speed of arbitrage window search was increased through cashing',
            'Telegram Assistant was transferred to a separate module',
            'We began the integration between Telegram Assistant and other modules',
            'Animation of dropdown lists was added'
        ]
    },
    {
        'date': '02/07/2018',
        'changes': [
            'We analyzed different exchanges for the feasibility of their connection',
            'BitStamp was connected to the main and Telegram modules',
            'HuobiCom was connected to the main and Telegram modules',
            'HTML layout of Telegram Assistant page',
            'Adapting Telegram Assistant pages to different screen sizes',
            'HTML layout of Module of Trader\'s Behavioral Analysis page',
            'Adapting Module of Trader\'s Behavioral Analysis page to different screen sizes',
            'We added the possibility to save the list of followers in CVS file',
            'We began the work on Module of Trader\'s Behavioral Analysis'
        ]
    },
    {
        'date': '29/06/2018',
        'changes': [
            'We connected HitBTC to Arbitrage Module',
            'We connected HitBTC to Telegram Assistant',
            'We began connecting Quoine to Arbitrage Module',
            'Bug fixing of Social Module (now tweets are saved only for subscribed users)',
            'We wrote the documentation for all controllers of the main module'
        ]
    },
    {
        'date': '28/06/2018',
        'changes': [
            'HTML layout of the referral page',
            'HTML layout of the page for desktop app download',
            'Cryptoacademy page and referral page are adapted to all screen sizes',
            'Telegram Assistant internationalization was improved',
            'We began connecting HitBTC to Arbitrage Module',
            'The manner of return of tweets in Social Assistant was changed',
            'We corrected writing off of funds while subscribing to Social Assistant',
            'While registering in the main module, a free trial month of subscription to Social Assistant is added',
            'Now user can know the date of the end of subscription to Social Assistant'
        ]
    },
    {
        'date': '27/06/2018',
        'changes': [
            'Statistics saving now returns % of all answers to the question',
            'We added a function that returns all test which user passed',
            'HTML layout of the support page',
            'User\'s authorization on Telegram Assistant was added',
            'Now we can get balance info, using Telegram Assistant',
            'Interaction part for Telegram Assistant was added',
            'We improved the display of error logs to increase debug effectiveness',
            'We began the work on HTML process of the code and its documentation',
            'We began the work on test servers of the modules to use them while developing without impact on the users',
            'Exception template processor was limited to return error statuses set by W3C'
        ]
    },
    {
        'date': '26/06/2018',
        'changes': [
            'We continue Unit testing for the main module',
            'Twitter API filters (Social Assistant) were changed',
            'Saving global statistics of answering for Cryptoacademy tests was implemented at backend',
            'Full localization of Telegram Assistant was added',
            'User interface of Telegram Assistant was changed'
        ]
    },
    {
        'date': '25/06/2018',
        'changes': [
            'Animations of browsing through pages',
            'HTML layout for Cryptoacademy page is done',
            'HTML layout for Cryptoacademy tests is done',
            'We did the layout for tweets location in Social Assistant',
            'Configuration of Twitter API filters for Social Assistant',
            'Unit testing for the main module',
            'Possibility to work with Arbitrage Assistant on Telegram was added',
            'Possibility of convenient navigating Telegram Assistant menu was implemented',
            'We finished optimization of existing business logic, accessing to the database, exceptions handling in the work of web app',
            'Logic of Cryptoacademy tests, saving the user’s answers and results, and global statistics was designed',
            'We began the work on the separate server for testing all external modules of the ecosystem'
        ]
    },
    {
        'date': '22/06/2018',
        'changes': [
            'Telegram session for user was implemented at backend',
            'Continuance of data input was implemented trough Telegram bot, too',
            'Testing and production variants of Telegram bot implementation were separated',
            'Twitter API was connected to Social Assistant at backend',
            'We optimized Social Assistant methods at backend',
            'Subscription function was moved from the main module to social module',
            'Global loader while loading the app was added',
            'We added animation to some elements of user interface',
            'We began the work on implementation of testing in Cryptoacademy module',
            'We added styles for radio buttons on the user configuration page'
        ]
    },
    {
        'date': '21/06/2018',
        'changes': [
            'The work of Arbitrage Assistant is optimized',
            'We developed the logic of bot’s actions when IP server is banned on exchange',
            'We began the development of Telegram Assistant at backend',
            'We developed the integration of Telegram module and personal cabinet',
            'Adaptive HTML layout of tweets displayed in Social Assistant',
            'Users’s configuration page is adapted to different display sizes',
            'We made a preloader for separate loading elements',
            'Studying Twitter API to implement Social Assistant',
            'Twitter API was tested',
            'We added filters to Twitter API',
            'Implementation of possibility to change user’s picture at frontend',
            'Little changes in the work with a dictionary at frontend',
            'We improved existing algorithms for interaction between modules',
            'Optimization of automatic testing to provide stability when implementing new ' +
            'functionality and modification of already existing functions'
        ]
    },
    {
        'date': '20/06/2018',
        'changes': [
            'We configured the server for work with ETH node',
            'The logic of saving the ways of notifications is developed',
            'We added data validation while a request for getting arbitrage windows from the main module',
            'Interaction bugs between main and arbitrage modules are fixed',
            'We added new preloader for elements uploaded from the server',
            'HTML layout of a page of user\'s profile was done',
            'Messages for a user working with Arbitrage Assistant were added',
            'We added write-off function for a subscription to Social Assistant at the backend',
            'Bugs of work with Social Assistant were fixed',
            'Development of notification features at the backend',
            'Arbitrage Assistant is fully implemented at frontend and is ready to use',
            'The work with Social Assistant dictionary was implemented at frontend'
        ]
    },
    {
        'date': '19/06/2018',
        'changes': [
            'The configuration of Lazy Loading for all modules at front end. This made loading of ' +
            'the website quicker since a component of the necessary module will be loaded not previously but when you\'ll need them',
            'Errors of sending the confirmation email are fixed',
            'Endpoints for email confirmation are added and tested at backend',
            'We made a page for an email confirmation with a message about success or an error',
            'Animated preloader for uploading of cryptocurrency rates in the dashboard',
            'The possibility of the interaction between a user and Social Module according to subscription was added at backend',
            'Possibility for subscription extension was added at backend',
            'Unit testing for interaction with Social Module through the main module was done',
            'The endpoint for getting user model was added',
            'Now endpoint of getting the user\'s last arbitrage modules also returns the date of the last request for arbitrage window',
            'Develop API for getting and debugging errors was added',
            'Arbitrage Module\'s implementation at front end was started'
        ]
    },
    {
        'date': '18/06/2018',
        'changes': [
            'We began working on API Kraken to make the work with this exchange possible in the ecosystem',
            'We faced problems of access which make automatic trading on Kraken difficult. ' +
            'That\'s why we involved technical department to find the solution',
            'Integration of Social Assistant with the main module on backend',
            'Unit testing for Social Assistant is done',
            'Unit testing for main features of interface of exchange connection is done',
            'The error of display and functionality of check boxes in Safari browser is fixed',
            'My Exchanges page is adapted to different screen sizes',
            'Custom drop-down design is added and can be seen on My Exchanges page',
            'Arbitrage Module backend bugs are fixed',
            'Integration between personal cabinet and Arbitrage Module',
            'We configured receipt of the last 5 arbitrage windows for user',
            'All components related to password recovery are made on front-end side',
            'We created a system of Arbitrage Module versions automatic updates',
            'We created a system of Social Assistant versions automatic updates',
            'Test server for Social Assistant is made',
            'Test server for Arbitrage Module is made'
        ]
    },
    {
        'date': '17/06/2018',
        'changes': [
            'We continue to work on endpoints for password recovery',
            'Bugs related to following some links are fixed',
            'Page of password recovery layout and the beginning of writing logic in components'
        ]
    },
    {
        'date': '15/06/2018',
        'changes': [
            'We finished the work on endpoints connected with Arbitrage Module',
            'Upload of user picture from the server is added. Possibilities to upload, edit, ' +
            'and delete user picture will be added as work on the user settings page progresses',
            'There was a refactoring of the code of methods implemented before',
            'Videos and texts with description were added to the pages of modules which are still being developed',
            'We solved some problems with sending requests linked with proxy configuration',
            'We added functionality to buttons on the Social Assistant page'
        ]
    },
    {
        'date': '14/06/2018',
        'changes': [
            'Popup on not implemented features',
            'Minor UI/UX improvements on dashboard and modules',
            'Mobile App page was added'
        ]
    },
    {
        'date': '13/06/2018',
        'changes': [
            'Logout feature was added',
            'We began working on arbitrage and social assistant launching',
            'Now you can see actual rates of top 10 cryptocurrencies in dashboard'
        ]
    }
];
