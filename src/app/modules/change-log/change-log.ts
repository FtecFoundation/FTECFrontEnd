export const changeLog = [
    {
        'date': '28/02/2019',
        'changes': [
            'Bug that prevented some of the users from receiving notifications on Telegram was fixed.',
            'Performance of Order Manager and Price Notification when working with Poloniex exchange was corrected.',
            'When incorrect data is input in Order Manager when creating an order, there are now new tips.',
            'The display of popular cryptocurrencies on the Dashboard was corrected.'
        ]
    },
    {
        'date': '15/02/2019',
        'changes': [
            'Date filter performance for TRP was improved.',
            'Portfolio selection system was improved in Portfolio Manager.',
            'Balanced Bot productivity was upgraded in Smart Trading Module.',
            'Corrected bug that prevented some users from using Cryptoacademy, and another test was added.'
        ]
    },
    {
        'date': '16/01/2019',
        'changes': [
            'Warning messages that occurred when the Volume Analyzer was configured incorrectly were fixed.',
            'Tips added while starting Volume Analyzer.',
            'Bots in Smart Trading Module are now selling orders by bids.',
            'Has been improved notification about ban in the system.'
        ]
    },
    {
        'date': '08/01/2019',
        'changes': [
            'Switching bots in Smart Trading Module was fixed on front end.',
            'After changing bots the notification about success or fail is fixed.',
            'The situation, when the hot cannot trade due to low balance was fixed. It can now take such accounts into consideration.',
            'Conservative Bot performance is optimized.'
        ]
    },
    {
        'date': '27/12/2018',
        'changes': [
            'NeuralNetwork in News Analyzer works faster now.',
            'Display of personal statistics for Smart Trading Module was improved.',
            'Bug which rarely happened during generation of ETH wallet was corrected.',
            'Display of tips for Portfolio Manager was improved.'
        ]
    },
    {
        'date': '17/12/2018',
        'changes': [
            'Performance of bots on Smart Trading Module with Binance exchange was corrected.',
            'The display of bots statistics was improved.',
            'The display of new comments for TRP was corrected.',
            'Performance through BitTrex API was improved.',
            'The fees for all modules were temporarily removed.'
        ]
    },
    {
        'date': '10/12/2018',
        'changes': [
            'The work of Order Manager & Price Notification with BitTrex exchange was corrected.',
            'The color palette of the diagram that is generated as a result of Portfolio Manager performance was improved.',
            'The display of locked pairs was corrected for Arbitrage Module.',
            'After the result is generated for Portfolio Manager and Global Price Analyzer there is now a link that takes you to the last result without reloading the page.'
        ]
    },
    {
        'date': '06/12/2018',
        'changes': [
            'Button performance of Telegram assistant that checks whether the Telegram account was connected is corrected.',
            'Pairs with USD/USDT currencies were added to Price analyzer.',
            'Ability to hide the result from Global Price Analyzer makes user experience better.',
            'Error that prevented user from adding new orders in Order Manager was corrected.'
        ]
    },
    {
        'date': '04/12/2018',
        'changes': [
            'Time needed to generate a portfolio in portfolio manager is significantly decresed from 35sec to 2-5sec.',
            'The notification, which is displayed on the Dashboard, about modules was improved.',
            'Mailing service was fixed. The bug that caused some mails to get lost was eliminated.'
        ]
    },
    {
        'date': '02/11/2018',
        'changes': [
            'Added the removal of the message in the Smart Trading Module in case the user has not connected the API keys of any exchange.',
            'Smart Trading Module updated images of bots.',
            'Added removal of messages to the Smart Trading Module if the user does not have a trading history.',
            'In Portfolio Manager with the latest generated user portfolios are not displayed on the tabs with ratings.',
            'Behavior analyzer is moved to the section of developed modules.'
        ]
    },
    {
        'date': '01/11/2018',
        'changes': [
            'The News Background Analyzer now displays 10 news per page.',
            'The portfolio manager fixed a bug with caching, due to which only 4 currencies were displayed in all ratings.',
            'The portfolio manager added a link to the FAQ to the question of algorithms for different types of portfolios.',
            'Portfolio Manager implemented saving the last 5 user-generated portfolios.',
            'In the Smart Trading Module added removal of the user\'s trading history.',
            'The Smart Trading Module also improved the trading bots.'
        ]
    },
    {
        'date': '31/10/2018',
        'changes': [
            'In the Trading Recommendation Platform now fixes the price of the currency at the time of closing the recommendation.',
            'In the Trading Recommendation Platform we changed the display of the description of the torus recommendation.',
            'Volume Analyzer is fully tested.',
            'In Volume Analyzer we fixed bug with non-preservation of the analyzer status in the user model.',
            'A clarification has been added to the Volume Analyzer in the analyzer settings that the user indicates the volume change factor for 1 candle.',
            'In the News Background Analyzer updated list of available for the analysis of currencies.',
            'The News Background Analyzer fixed the function of the forced update of the list of forecasts.'
        ]
    },
    {
        'date': '30/10/2018',
        'changes': [
            'The Trading Recommendation Platform now has a filter by recommendations.',
            'In the Trading Recommendation Platform, a bug with caching was fixed that did not allow the filter to be applied to recommendations several times.',
            'In the Trading Recommendation Platform, a bug was fixed with displaying errors to the fields after several recommendations were created in a row.',
            'In the Trading Recommendation Platform, a more frequent interval of updating and checking the price of the currency is recommended.',
            'In the Trading Recommendation Platform, the inscription has been changed to subscribe to a free recommendation.',
            'In the Trading Recommendation Platform, the writing off and charging of FTECs for trading recommendations is adjusted.',
            'In the Trading Recommendation Platform, the color of the unfinished trading recommendations is changed.'
        ]
    },
    {
        'date': '29/10/2018',
        'changes': [
            'An inscription has been added to the Global Price Analyzer informing that the user can select several currencies to search at once.',
            'Global Price Analyzer has added clearing the input field of the pair and automatic focus on it for the convenient introduction of several pairs at once.',
            'In the Trading Recommendation Platform, on the recommendation creation page, the labels are aligned and the fields bond angles radius is reduced.',
            'In the Trading Recommendation Platform, the price chart is aligned vertically and horizontally.',
            'In the Trading Recommendation Platform, the name\'s derivation and recommendation\'s descriptions are  added.',
            'In the Trading Recommendation Platform, the old recommendations are no longer deleted, but are displayed in semi-transparent blocks.',
            'The Trading Recommendation Platform adds the ability of transition to the page of all recommendations, the field of adding a new recommendation.'
        ]
    },
    {
        'date': '26/10/2018',
        'changes': [
            'On the Order Manager page we added checking the availability of the necessary amount of coins on the balance of the exchange for placing orders.',
            'On the Order Manager page, when the price changes in the field, the target price also changes the slider with a percentage.',
            'Buttons (-10%, -5%, -3%, 3%, 5%, 10%) were added to the Order Manager page, allowing you to quickly select the desired target percentage.',
            'On the Global Price Analyzer page we added buttons with top 20 currencies (by capitalization) for quick selection.',
            'On the Global Price Analyzer, the appearance of the blocks with the search results for currency prices has been changed.',
            'On the Global Price Analyzer page we fixed a bug with the inability to select the minimums / maximums for each field.',
            'On the Global Price Analyzer page, the percentage of savings is now a percentage, not a coefficient.'
        ]
    },
    {
        'date': '25/10/2018',
        'changes': [
            'On the Price Notification page, when the price changes in the field, the target price also changes the slider with a percentage.',
            'Buttons (-10%, -5%, -3%, 3%, 5%, 10%) have been added to the Price Notification page, allowing you to quickly select the desired target percentage.',
            'We fixed a bug with displaying price alerts.',
            'The following information has been added to the Price Notification on the created alert card: the price at the time the alert was created, the date it was created, the date the goal was reached.',
            'A link to the alert settings page has been added to the Price Notification page.',
            'On the Order Manager page switch is made for the entire width of the block.',
            'A warning has been added to the Order Manager that prohibits the selection of a pair that is not on the user-connected exchanges.'
        ]
    },
    {
        'date': '24/10/2018',
        'changes': [
            'We fixed bugs in the work of Social Assistant.',
            'On the cryptoacademy page, tabs with a large amount of content are placed in the first places.',
            'On the cryptoacademy page we tested the work of tests for the forecast.',
            'On the cryptoacademy page we checked the availability of pictures in all tests.',
            'On the Telegram Assistant page, the QR code is moved to the right side of the screen.',
            'We fixed a bug with caching requests, not allowing to check whether the Telegram bot is connected to the account.',
            'The Behavioral Analyzer now displays a message stating that no exchanges are connected to the account and a link to the page with the exchanges settings has been added.'
        ]
    },
    {
        'date': '23/10/2018',
        'changes': [
            'Also we added modal windows on the development of unsupported ways to send alerts.',
            'We changed error status for endpoints with a limited number of requests for a certain time. Now the user will be displayed a message.',
            'A Terms of Service document has been written and a page has been added where the user can read it.',
            'The link in the confirmation email redirects to the main page of the ecosystem.',
            'We fixed a table layout bug on the Dashboard page.',
            'On the Dashboard page, a header is added above the table with connected exchanges.',
            'On the My Exchanges page, a link has been added to the section in the FAQ about connecting exchange key APIs. In the Social Assistant, the user\'s dictionary is maintained even after his subscription expires.'
        ]
    },
    {
        'date': '22/10/2018',
        'changes': [
            'At the frontend, on the user information settings page, the ability to change your current email has been added.',
            'We updated a list of questions for the FAQ.',
            'At the frontend, the ability to send support requests has been added.',
            'The logic of choosing the current currency on the payments page has been slightly changed.',
            'We changed tabs design.',
            'We fixed a bug with the choice of how to send notifications.',
            'Modal windows have been added to the Desktop App page to inform the user about the current development of this module.'
        ]
    },
    {
        'date': '19/10/2018',
        'changes': [
            'We fixed a layout bug with circumcision of long email addresses in the top user menu.',
            'In the top user menu now displays user balances for all currencies.',
            'Social network icons have been added to the site’s footer with links to the project’s official pages.',
            'On the dashboard page, the contents of the table with the action history for the modules are replaced by the inscription "in development".',
            'On the My Exchanges page we fixed the layout bug in the table.',
            'We fully tested the work of the referral program.',
            'At the frontend, on the user information settings page, the ability to change your current password has been added.'
        ]
    },
    {
        'date': '18/10/2018',
        'changes': [
            'We fixed label placement over all input fields.',
            'A table of support for exchanges with modules was compiled and placed on a separate page (the link is located in the menu on the right).',
            'A table of prices for the use of modules was compiled and placed on a separate page (the link is located in the menu on the right).',
            'A collapsible block with brief information about the use of the module has been added to the pages of all modules.',
            'We changed the appearance and content of the right information menu.',
            'We tested sending notifications for all modules.',
            'Alert icons via email and telegrams are moved to the top of the list with available alert methods.'
        ]
    },
    {
        'date': '17/10/2018',
        'changes': [
            'We moved and integrated under FTEC tests for Price Notification.',
            'At frontend, the display of the name and picture of the authors of trade recommendations, as well as comment authors has been fixed.',
            'At frontend, the display of the rating, the name and the picture for the newly-left associate is fixed.',
            'At frontend, a bug was corrected with a request to receive Smart Trading Module settings for various exchanges.',
            'We fixed updating of comments for each trading recommendation at frontend.',
            'We redesigned the appearance and content of the landing site.'
        ]
    },
    {
        'date': '16/10/2018',
        'changes': [
            'We moved and integrated under FTEC tests for Order Manger.',
            'We refactored service for Order Manager.',
            'We moved backend for Price Notification.',
            'At frontend, getting and displaying of all comments to the trading recommendation is implemented.',
            'An opportunity to add a comment to the trading recommendation is implemented at frontend.',
            'The ability to buy / subscribe to the trading recommendation is implemented at frontend.',
            'At frontend we fully implemented the transition to the page with a detailed view of trading recommendations.'
        ]
    },
    {
        'date': '15/10/2018',
        'changes': [
            'We moved and integrated under FTEC tests for Behavioral Analyzer.',
            'We refactored service for Price Notification.',
            'We moved backend for Order Manager.',
            'We added caching of rating and fields (userName, userImage) for Forecast entity.',
            'We improved code for partial getting of entity fields.',
            'we system tested and fixed Trading Recommendation Platform.',
            'We fixed display of the latest payment transactions on the payments page.'
        ]
    },
    {
        'date': '12/10/2018',
        'changes': [
            'Fixed an issue on the Social Assistant page that prevented tweets from loading.',
            'We fixed some error messages on the Portfolio Manager page.',
            'On the Trading Recommendation Platform page, a method is implemented to find out whether the user is the author of the recommendation.',
            'A service for getting user avatars is implemented at frontend.',
            'For the Bahavioral Analyzer changed the corrected response.',
            'We created endpoint for getting avatars and nicknames of other users.',
            'We improved services and repositories for getting Forecast Entity.'
        ]
    },
    {
        'date': '11/10/2018',
        'changes': [
            'The project Behavioral Analyzer has been moved to the main FTEC module.',
            'For the Trading Recommendation Platform, the method has been redesigned to get the author’s rating recommendations.',
            'In the Trading Recommendation Platform, a field has been added to the method for obtaining the author’s rating that indicates whether there has been an increase in the last 24 hours.',
            'Endpoint has been added to the Trading Recommendation Platform to receive recommendations purchased by the user.',
            'The Trading Recommendation Platform fixed a small bug when subscribing.',
            'At frontend, on the News Background Analyzer page, the ability to manually start the analyzer once an hour is implemented.',
            'Fixed a bug in the layout, because of which the table with arbitration windows did not scroll.'
        ]
    },
    {
        'date': '10/10/2018',
        'changes': [
            'At frontend, we implemented the calculation of a percentage of change in a currency price for each trading recommendation.',
            'At frontend, we added the notification about successful creation of recommendation with the possibility to see its details and go to creation of the next recommendation.',
            'At frontend, we implemented the method of getting and display of author’s rating for each trading recommendation.',
            'At frontend in Trading Recommendations Platform, we added the display of price levels on the chart.',
            'At frontend in Trading Recommendations Platform, we added the display of stop loss and take profit of trading recommendation on the chart.',
            'We updated and filled the documentation for Trading Recommendations Platform.',
            'In Trading Recommendations Platform, we fixed the method which calculates the success of forecast on trading recommendation.'
        ]
    },
    {
        'date': '09/10/2018',
        'changes': [
            'We fixed small errors in Trading Recommendations Platform.',
            'We wrote the documentation for News Background Analyzer controllers.',
            'We added the method for the manual running of news analyzer once per hour for every user.',
            'At frontend, we implemented countdown of trading recommendation activity. ',
            'We also added the display of the timer for each recommendation.',
            'At frontend, we implemented the display of all the user\'s recommendations.',
            'At frontend, we added validation of fields while creating a new trading recommendation.'
        ]
    },
    {
        'date': '08/10/2018',
        'changes': [
            'We implemented the method of getting a ticker for Huobi.',
            'We implemented most of the methods for Trading Recommendation Platform.',
            'We created tables for Trading Recommendation Platform entities in the database.',
            'We fixed the main methods in the services.',
            'We wrote controllers for Trading Recommendation Platform.',
            'In the admin panel, we fixed the error arose when trying to filter pairs in the enter field.',
            'For some exchanges (Kraken, BitStamp, HuobiCom, YObitNet) we implemented the method of getting the current price for a currency.'
        ]
    },
    {
        'date': '05/10/2018',
        'changes': [
            'On Arbitrage Assistant page, we implemented the possibility to cancel exchanges if the user pushed the button "All exchanges".',
            'On Module of Cryptocurrency Portfolio Management page, we implemented the graphics display of generated portfolio and its characteristics. ',
            'On  Module of Cryptocurrency Portfolio Management page, we fixed the error of getting only 5 currencies of TOP 100.',
            'On Anomalous Volume Dynamics Analyzer page, we fixed the display of exchanges and columns of the table.',
            'We added the main methods in the services.',
            'We fixed the method of getting a ticker for Binance.',
            'We implemented the method of getting a ticker Kraken.',
            'For some exchanges (Poloniex, BitTrex, Binance, Hitbtc, Bitfinex) we implemented the method of getting the current price for a currency.'
        ]
    },
    {
        'date': '04/10/2018',
        'changes': [
            'On News Background Analyzer page, the window of adding a currency to user\'s list becomes inactive if the subscription expired.',
            'On News Background Analyzer page, we added the message if there are no forecasts.',
            'At frontend on News Background Analyzer page, we added the call for request on getting forecasts after every editing of currency list followed by the user.',
            'On landing, we updated the percentage of readiness of the ecosystem\'s modules.',
            'In the admin panel, we implemented requests on getting all pairs and the last currency price from Yobit.',
            'We began HTML layout of the design of Trading Recommendation Platform.',
            'On Module of Cryptocurrency Portfolio Management page, we implemented the possibility to generate a portfolio.',
            'On Module of Cryptocurrency Portfolio Management page, we added the possibility to specify the desired size of a portfolio in USD (the system automatically converts this amount to BTC).'
        ]
    },
    {
        'date': '03/10/2018',
        'changes': [
            'At frontend, we implemented the display of currency rating on the percentage of growth for 3, 7, 30, and 90 days.',
            'We implemented drafting of the rating and sorting of top 100 coins on capitalization on the percentage of growth for the period chosen by the user.',
            'In Module of Cryptocurrency Portfolio Management, we configured the performance in parallel flow, which speeded up the returning of the result on more than 20 seconds.',
            'In Module of Cryptocurrency Portfolio Management, we changed the course of calling for exchanges for long investment periods (more than for a month), which also speeded up the returning of the result on more than 20 seconds.',
            'We added and tested the expanded answer which contains recommendations on the elimination of errors while building a portfolio.',
            'We implemented the basic structure for Trading Recommendation Platform.',
            'We fixed the error of variable values in the table on Module of Cryptocurrency Portfolio Management page when trying to sort the same values.',
            'On News Background Analyzer page, we added the change of color for forecasts on falling and deleted the minus signs for correct display of range.'
        ]
    },
    {
        'date': '02/10/2018',
        'changes': [
            'We implemented getting of the percentage of change from Coinmarketcap (per 1 day, per 10 days).',
            'We implemented the calculation of number of coins for Aggressive, Balanced and Conservative portfolios.',
            'We implemented but not tested getting the percentage of change for a large period of time (month, 6 months, 12 months).',
            'We tested the work of Module of Cryptocurrency Portfolio Management for long periods.',
            'We added the controller for Module of Cryptocurrency Portfolio Management and documentation to it.',
            'We changed the logic of returned results for News Background Analyzer.',
            'News Background Analyzer now returns old results (which were before subscription).',
            'At frontend, we implemented getting of top 100 coins on capitalization from Coinmarketcap and the search for their relevant prices on Bittrex and Binance.'
        ]
    },
    {
        'date': '01/10/2018',
        'changes': [
            'At frontend, we implemented the possibility to add to the currency list new currencies, news on which are followed by the user.',
            'At frontend, we implemented the possibility to delete form the currency list currencies, news on which are followed by the user.',
            'At frontend, we implemented the possibility to prolong the subscription to News Background Analyzer.',
            'At frontend, we implemented the display of remaining subscription days.',
            'At frontend, we implemented the display of News Background Analyzer\'s predictions and results.',
            'At frontend we added the Poloniex exchange support to Smart Trading Module.',
            'We debugged and fixed the process of News Background Analyzer.',
            'News Background Analyzer was finnaly tested.'
        ]
    },
    {
        'date': '28/09/2018',
        'changes': [
            'The platform services are also available now on ftec.io and ftec.ai.',
            'At frontend in admin panel, we implemented the possibility to add and change the picture of a question.',
            'At frontend, we established the display of tests in Cryptoacademy in ascending order of test ID.',
            'We added the saving of analyzed result for each user who has an active subscription and same tags.',
            'We wrote the controller which returns the last analyzer results.',
            'We fixed deficiencies in parser for news resource CCN.',
            'At frontend we added the Binance exchange support to Smart Trading Module.',
            'We added the documentation for the work with News Background Analyzer.'
        ]
    },
    {
        'date': '27/09/2018',
        'changes': [
            'In the proxy module, we added the function of getting the balance for a certain pair (Yobit).',
            'In the proxy module, we added the function of closing order for Poloniex.',
            'We created services for the analyzer work with users.',
            'We remade the service for analyzing news that can work now both for making sample and in planned mode.',
            'We implemented the service for the work with news resource CCN that extracts and publishes news.',
            'We refactored and complemented the services for the work with vocabulary, news resources, and analyzing news.',
            'We created a training sample for CCN.',
            'Landing was fully transferred to ftec.network.'
        ]
    },
    {
        'date': '26/09/2018',
        'changes': [
            'In the proxy module, we added the function of getting the balance for a certain pair (HitBTC).',
            'In the proxy module, we added the function of closing order for HitBTC.',
            'In the graph class, we implemented the method for getting names of surrounding peaks.',
            'We implemented the method for getting a K value of correlation between two vocabularies.',
            'We wrote the method which gets articles and finds correlation on graph at a given time (not tested).',
            'We fixed the work of encode and decode methods of pairs for Kraken in Global Price Analyzer.',
            'The service of work with news sources was tested and debugged with Mosk implementation.',
            'For ccn.com, we froze the method of extracting a page content.'
        ]
    },
    {
        'date': '25/09/2018',
        'changes': [
            'In the proxy module, we added the function of getting the balance for a certain pair (Poloniex).',
            'In the proxy module, we added the function of getting an active order by ID for Yobit.',
            'In Exchange Order Management Module, we added the function of notifying the user when it’s necessary to set at order but there are not enough funds on the balance (Yobit).',
            'In the proxy module, we fixed bugs of setting buy orders for HitBTC.',
            'In Module of Price Notification and Exchange Order Management Module, we fixed the bug on checking the current price for Poloniex.',
            'In the proxy module, we added the function of closing order for Bittrex.',
            'In the service for working with dictionary, we added methods for serialization/deserializarion is vocabulary. ',
            'In the graph class, we implemented the method for getting a name of the root.',
            'We fixed encode and decode methods of pairs for Kraken. '
        ]
    },
    {
        'date': '24/09/2018',
        'changes': [
            'In Exchange Order Management Module, we added the function of notifying the user when it’s necessary to set at order but there are not enough funds on the balance (Poloniex).',
            'In the proxy module, we added the function of getting an active order by ID for Poloniex.',
            'In the proxy module, we added the function of getting the balance for a certain pair (Binance).',
            'In the proxy module, we added the function of closing order for Binance.',
            'In Module of Price Notification and Exchange Order Management Module, we fixed the bug on checking the current price for Bittrex.',
            'In the proxy module, we added the function of getting all active pairs for Yobit.',
            'In the proxy module, we fixed bugs of setting buy orders for Bittrex.',
            'In Exchange Order Management Module, we added the function of saving onsite on when it’s necessary to set an order (Yobit).'
        ]
    },
    {
        'date': '21/09/2018',
        'changes': [
            'At frontend in the admin panel, we implemented the possibility to add and delete test questions. ',
            'At frontend in the admin panel, we implemented the possibility to mark and change the correct answer to the question.',
            'At frontend in the admin panel, we implemented the possibility to edit questions in tests.',
            'The user will receive notification about successful balance replenishment every time user replenish it (for BTC).',
            'We added the function which checks addresses for successful replenishments every 19 minutes (for BTC).',
            'In Module of Price Notification, we added the display of error when user exceeds the limit of saving conditions.',
            'In the main module, we added the function of changing old password to a new one.',
            'In Exchange Order Management Module, we added the function of notifying the user when it’s necessary to set at order but there are not enough funds on the balance (HitBTC).',
            'In the proxy module, we added the function of getting an active order by ID for HitBTC.',
            'In the proxy module, we added the function of getting the balance for a certain pair (Bittrex).'
        ]
    },
    {
        'date': '20/09/2018',
        'changes': [
            'We fixed the method of getting an order book for Huobi.',
            'In Global Price Analyzer, we processed the case when there are not enough funds on exchange on requested BTC volume.',
            'We fixed the error in generating documentation.',
            'We added the logic of currency conversion to the commission system.',
            'We implemented the possibility of using trading bots by the administration.',
            'At frontend, we processed form of sending a request on the search for prices in Global Price Analyzer. ',
            'At frontend, we implemented the display of results of the search for prices in Global Price Analyzer.',
            'For News Background Analyzer, we created the basic structure and basic class which calculates a number of words repeated. ',
            'We created the class which keeps the interaction between files and correlation coefficient. ',
            'For the class which keeps the interaction between files and the correlation coefficient, we implemented and tested custom serialization/deserialization.'
        ]
    },
    {
        'date': '19/09/2018',
        'changes': [
            'We added HitBTC to Anomalous Volume Dynamics Analyzer.',
            'We fixed the method of returning candlesticks for Huobi in Anomalous Dynamics Colume Analyzer (preciously, it returned them in reverse order).',
            'For Anomalous Volume Dynamics Analyzer, we fixed the method of returning candles for HitBTC (it returned them with old indicators).',
            'We fixed the method of getting all available currencies in stocks module for HitBTC (it returned for volume for quote pair).',
            'We fixed the method of getting all available currencies in stocks module for Poloniex (it returned incomplete result due to catch block behind for block).',
            'At frontend in Smart Trading Module, we added the possibility to choose the maximum amount of trades for bots.',
            'At frontend in Smart Trading Module, we added the possibility to change an active bot and disable trades.',
            'At frontend, we implemented the possibility to change an active exchange in Smart Trading Module configurations.',
            'At frontend in admin panel, we changed the way of sending image for test.',
            'At frontend in admin panel, we implemented the possibility to delete tests.'
        ]
    },
    {
        'date': '18/09/2018',
        'changes': [
            'We fixed the method of getting pairs into one type for BitStamp and Huobi.',
            'We added a limitation on creating trade configurations for exchanges having API keys connected.',
            'We added the possibility to change trade configurations of the user.',
            'We added controllers for getting statistics on trade configurations os users for admin.',
            'We added a limitation on the validity of data while change in trade configurations of the user.',
            'We added trade history model for the user.',
            'At frontend, we implemented the possibility to get Smart Trading Module configurations.',
            'At frontend, we implemented the possibility to change an active exchange in Smart Trading Module configurations.',
            'We wrote and tested service and controller for Global Price Analyzer on BitTrex, Poloniex, Binance, HitBtc, BitStamp, Huobi.',
            'We wrote documentation for Global Price Analyzer controller.'
        ]
    },
    {
        'date': '17/09/2018',
        'changes': [
            'We added the possibility to create trade configurations for the user.',
            'We added saving account balance history while filling.',
            'We configured and established Telegram and email notifications.We configured and established Telegram and email notifications.',
            'We fixed the vulnerability which allowed to enable currently inaccessible ways of notifications.',
            'We changed the answer to requests in Social Assistant, errors are returned in JSON format now.',
            'We processed the error while using an unsupported pair in Anomalous Volume Dynamics Analyzer.',
            'In Anomalous Volume Dynamics Analyzer, the logic of work with pairs was improved.',
            'The method of getting an order book now accepts a parameter, on which a number of returning objects depends. This works for Poloniex, Kraken, Binance, HitBtc.',
            'We changed the model of client-server communication, which allows using more convenient ways of data transferring.',
            'We added the processing of previously unclassified errors.'
        ]
    },
    {
        'date': '14/09/2018',
        'changes': [
            'We fixed critical error in Telegram Assistant, which didn\'t allow the work with it.',
            'We switched to Clouflare to protect the web service.',
            'We made rules for getting access to the server and filtration of possible DDOS attacks.',
            'We began the work on Global Price Analyzer.',
            'We added the command "/unlink" to Telegram for account to unlink from Telegram.',
            'We added the automatic verification of payments.',
            'We fixed the error with rounding of payment results.',
            'We added commands for Social and Arbitrage Assistants to Telegram. ',
            'Method of getting an order book now returns objects to String, not JSON. We tested this for Bitrex, Poloniex, Kraken, Binance, Bitstamp, HitBtc.',
            'We created the base for Global Price Analyzer.'
        ]
    },
    {
        'date': '13/09/2018',
        'changes': [
            'At NodeJS server, we implemented the protection against a large number of requests per second.',
            'We changed the field that returned a list of used exchanges, now it is an exchange for which anomalous volume is found.',
            'When anomalous dynamics is found, methods are called (credit white-offs, notification, disconnection of Analyzer if there are not enough funds).',
            'In methods of getting available pairs, we added the possibility to get them by minimum volume (for Poloniex, Bittrex, Binance).',
            'In Anomalous Volume Dynamics Analyzer, we added the method for checking timeframe availability for chosen exchange.',
            'We tested and fixed the work of Anomalous Volume Dynamics Analyzer for exchanges (Poloniex, Binance, Kraken, Huobi).',
            'We added functions to automate the work with Cryptoacademy.',
            'We implemented checking of the admin role for using relevant functions. ',
            'We changed the work of logic of filling the balance and generating an address for it.',
            'We fixed error in sums which were credited while filling. '
        ]
    },
    {
        'date': '12/09/2018',
        'changes': [
            'We changed the logic of saving users\' balances, using non-integer types.',
            'We fixed the error of linking Telegram with the user.',
            'We fixed the error of getting FTEC balance using user\'s address.',
            'We added the possibility of generating addresses for filling balance.',
            'We implemented verifications of filling balance in some intervals dependent on the address type.',
            'We implemented the possibility of forced verification of address balance.',
            'We changed the template of answers to commands on creating and editing Cryptoacademy tests.',
            'At frontend in Anomalous Volume Dynamics Analyzer, we made a display of anomalous volume behavior found by the analyzer.',
            'At frontend in Anomalous Volume Dynamics Analyzer, we made a display of message when there are no found anomalies.',
            'We continue working with Telegram Assistant updates, global functions for distribution of commands and processing of incorrect capture/non-existing commands were implemented.'
        ]
    },
    {
        'date': '11/09/2018',
        'changes': [
            'We fixed the key of the answer to requests in Anomalous Volume Dynamics Analyzer in the method of getting and setting up the configurations for the analyzer.',
            'In Anomalous Volume Dynamics Analyzer, we changed SettingsDTO (fields botld, userId, isActive were deleted). We also relatively changed methods of implementation.',
            'We added the field of the condition of Anomalous Volume Dynamics Analyzer, which returns after a request for user\'s model.',
            'At frontend, we implemented the possibility to generate addresses for payments in BTC, ETH, FTEC.',
            'At frontend, we added withdrawal of user\'s currently favorable currency and generated an address to fill the balance in this currency.',
            'We created and configured Angular project of the service for the administrator.',
            'In the admin panel, we implemented the display of all existing Cryptoacademy tests.',
            'In the admin panel, we implemented a modal window with a form for creating a new test.',
            'We made the file for changing field timeframe in the table with settings of  Anomalous Volume Dynamics Analyzer.',
            'We added the support of proxy requests (to get currencies and candlesticks) for Kraken and Huobi.'
        ]
    },
    {
        'date': '10/09/2018',
        'changes': [
            'We changed the way of choosing exchange for analysis so the user can now choose several exchanges at frontend in Anomalous Volume Dynamics Analyzer.',
            'We added the possibility to save the settings of the analyzer at frontend in Anomalous Volume Dynamics Analyzer.',
            'We implemented the method of saving and getting the last settings of the analyzer at frontend in Anomalous Volume Dynamics Analyzer.',
            'We implemented a check of the analyzer condition at frontend in Anomalous Volume Dynamics Analyzer.',
            'We added the possibility to launch and to stop the work of the analyzer at frontend in Anomalous Volume Dynamics Analyzer.',
            'We added a check of all setting fields for validity while attempt to save new analyzer settings at frontend in Anomalous Volume Dynamics Analyzer.',
            'We added new messages about errors for users.',
            'We added the method which returns a specific parameter for each exchange with the relevant timeframe.'
        ]
    },
    {
        'date': '07/09/2018',
        'changes': [
            'We fixed the bug with logout.',
            'We redesigned the payment function. From now the address will go through the admin panel before it is in available mode.',
            'We fixed the bug of Social Assistant. Tweets won\'t be linked twice anymore.',
            'We improved the code readability, the processing of user\'s answers in Telegram Assistant was speeded up as well.',
            'We fixed the bug of placing the image of answers to Cryptoacademy forecasting tets.',
            'We added the possibility to see desired arbitrage windows by days.',
            'At frontend, we implemented getting the data for user\'s form on Anomalous Volume Dynamics Analyzer page.',
            'We redid HTML layout of Anomalous Volume Dynamics Analyzer page.',
            'We fixed the adaptation of Anomalous Volume Dynamics Analyzer page to all screen sizes.'
        ]
    },
    {
        'date': '06/09/2018',
        'changes': [
            'In Exchange Order Management Module. we added the function of saving the condition when it\'s necessary to set an order (for Poloniex).',
            'In the proxy module, bugs of setting buy orders were fixed (for Bittrex).',
            'In the main module, we optimized the referral system which will speed up the work of the main module.',
            'In the proxy module, we added the function of getting all active pairs (for Poloniex).',
            'We redid HTML layout of Global Price Analyzer page.',
            'We fixed the adaptation of Global Price Analyzer page to all screen sizes.',
            'To Arbitrage Module, we added buttons to display the user\'s last window search.',
            'We fixed the display of pages in Cryptoacademy tests so the chart is shown entirely.',
            'We prepared and added new test about divergence to Cryptoacademy.'
        ]
    },
    {
        'date': '05/09/2018',
        'changes': [
            'We added the button on Module of Trader\'s Behavioral Analyzer page to quickly go to My Exchanges page. ',
            'We fixed the bug with white line on some buttons.',
            'We fixed the function of filling the balance to the main module (for BTC).',
            'In the main module, we added the function of getting the current balance for the address (for BTC).',
            'In the main module, we added the function of generating addresses for replenishment (for BTC).',
            'We added the function of getting the balance for a specific pair (for Binance).',
            'We fixed the display of configurations of module notifications on Telegram Assistant page.',
            'We added messages informing about the absence of active notifications, orders, and disabled Telegram Assistant to the Module of Price Notification and Exchange Order Management Module.',
            'We fixed the display of currencies on News Background Analyzer page.'
        ]
    },
    {
        'date': '04/09/2018',
        'changes': [
            'In Exchange Order Management Module, we added the function of saving condition when it\'s necessary to set an order (for HitBTC).',
            'In the proxy module, we added the function of getting all active pairs (for HitBTC).',
            'In Exchange Order Management Module, we added the function of notifying the user when an order is set successfully (for Bittrex).',
            'In Exchange Order Management Module, we added the function of notifying the user when it\'s necessary to set an order but there aren\'t enough funds on the balance (for Bittrex).',
            'We added the function of filling the balance to the main module (for BTC).',
            'In Cryptoacademy, we fixed the display of correct and chosen answers.',
            'We deleted the function of cashing Cryptoacademy statistical files at frontend.',
            'At frontend, we added the possibility to close notifications prematurely by clicking on the relevant button.',
            'At frontend, we implemented the logic of forecasting test answers and display of the correct answer.',
            'We optimized the structure of code files.'
        ]
    },
    {
        'date': '03/09/2018',
        'changes': [
            'We fixed the bug with changing the test information in the admin panel.',
            'We added the function of generating addresses for replenishment (for ETH).',
            'We added the function of getting the current balance for the address (for ETH).',
            'We added the function which checks addresses for successful replenishment every minute (for ETH).',
            'When filling the balance, the user gets a notification about successful replenishment (for ETH).',
            'At frontend, we added cascade animation when disappearing of notification after pushing the button "hide all".',
            'On the Cryptoacademy main page, we added navigation through tabs.',
            'On the Cryptoacademy main page, we added content for the "Forecasting" page with training tests on forecasting.',
            'We changed the logic of getting test questions at frontend due to optimization and division of a file with tests.',
            'At frontend, we completed the list of local messages about errors for users.'
        ]
    },
    {
        'date': '31/08/2018',
        'changes': [
            'We added the possibility to save correct answers in a file for Cryptoacademy.',
            'File with answers was divided into several files (one for each test), which will increase productivity when passing tests.',
            'In the proxy module, we added the function of getting all active pairs (for Bittrex).',
            'In the proxy module, we added the function of buying currency (for Yobit).',
            'In the proxy module, we added the function of selling currency (for Yobit).',
            'We worked on the structure of new tests for forecasting in Cryptoacademy.',
            'We implemented the component inheritance to provide different processing of answers in different types of tests in Cryptoacademy.',
            'We implemented the processing of answers to tests for forecasting in Cryptoacademy.',
            'In Mobile App for IOS, we added the processing of some errors from the server.',
            'We added the button, which helps to close each error notification immediately.'
        ]
    },
    {
        'date': '30/08/2018',
        'changes': [
            'In Exchange Order Management Module, we added the function of notifying the user when order is set successfully (for Binance).',
            'In Exchange Order Management Module, we added the function of notifying the user when it’s necessary to set an order but the aren’t enough funds on the balance (for Binance).',
            'In Exchange Order Management Module, we added the function of saving logs when order is set.',
            'In Exchange Order Management Module, we added the function of deleting logs after 7 days.',
            'In the proxy module, we added the function of getting an active order under orderld (for Binance).',
            'At frontend, we updated the processing of errors. Now all errors founded are shown in the user interface.',
            'We fixed the error of cyclical implementation of dependencies while interception of errors.',
            'We added the animation of appearance and disappearance of the notice of error window.',
            'We added the “Hide all” button for immediate closing of all notices of error.',
            'The text in the notice of error was changed for production app (simplified reason of error without status code is shown).'
        ]
    },
    {
        'date': '29/08/2018',
        'changes': [
            'In the proxy module, we fixed bugs of setting buy orders on Binance.',
            'In the proxy module, we fixed bugs of setting sell orders on Binance.',
            'In Exchange Order Management Module, we added the function of saving conditions when it\'s necessary to set an order (for Bittrex).',
            'Social Assistant is now on new Twitter API (v 1.1).',
            'We fixed the bug of impossibility to finish a test, answering to one of the missed questions in Cryptoacademy tests.',
            'In Cryptoacademy, we fixed the bug of calculating passed tests on the page with all tests available.',
            'In Cryptoacademy, we fixed the bug of calculating passed tests if users repass test.',
            'We fixed the bug of the white screen if the page loads for a long time.',
            'We began the development of sending notifications from modules to Mobile App.',
            'On Telegram Assistant page, the bug of displaying the checkboxes was fixed.'
        ]
    },
    {
        'date': '28/08/2018',
        'changes': [
            'We fixed the bag of saving conditions for Module of Price Notification for Bittrex (since baseAsset is left there).',
            'In Exchange Order Management Module, we added the function of saving condition when it\'s necessary to set an order (for Bittrex).',
            'In Exchange Order Management Module, we added the function of checking condition when it\'s necessary to set an order (for Binance).',
            'In Exchange Order Management Module, we added the function of checking condition when it\'s necessary to set an order (for Bittrex).',
            'We changed the position of preloader on Arbitrage Assistant page.',
            'We fixed the bag appeared when passing Cryptoacademy tests (incorrect shut-down when missing questions).',
            'On Telegram Assistant page, we fixed the display of link to the bot and link in QR code.',
            'We began the work on transferring Mobile App to IOS on FTEC API.',
            'We implemented the possibility to authorize to the user\'s account in Mobile App.',
            'In Exchange Order Management Module, we added the function of saving all conditions when it\'s necessary to set an order (for Binance).'
        ]
    },
    {
        'date': '27/08/2018',
        'changes': [
            'We fixed the problem with CORS on requests to API of Binance.',
            'In Exchange Order Management Module and Module of Price Notification, the price field changes in synchrony with movement of the slider.',
            'It\'s now impossible to choose inactive ways of notification (SMS and push-notifications) in Module of Price Notification.',
            'In Module of Price Notification, the error of absence of a chosen way of notification now vanishes when rechoosing one of the ways.',
            'Dropdown list (which appears when you click on the userpic in header) now is closed when you click beyond it.',
            'We changed the table on My Exchanges page and corrected display of exchanges\' names there.',
            'In the proxy module, we added the function of buying currency (for Poloniex).',
            'In the proxy module, we added the function of selling currency (for Poloniex).',
            'In Module of Price Notification, we added the function which makes it possible to see all conditions when it\'s necessary to notify the user (for Poloniex).',
            'In Module of Price Notification, we added the function which makes it possible to check all conditions when it\'s necessary to notify the user (for Poloniex).'
        ]
    },
    {
        'date': '24/08/2018',
        'changes': [
            'In Module of Price Notification, we added the function of checking conditions when it\'s necessary to notify the user.',
            'In Module of Price Notification, we added the function which makes it possible to see all conditions when it\'s necessary to notify the user.',
            'In the proxy module, we added the function of getting all active pairs (for Binance).',
            'In Module of Price Notification, we added the function which makes it possible to see old messages.',
            'We optimized the load on the client application net, using caching of frequently used data.',
            'In Exchange Order Management Module, we added the possibility to see done orders.',
            'Exchange Order Management Module is in beta testing phase.'
        ]
    },
    {
        'date': '23/08/2018',
        'changes': [
            'In the proxy module, the function of buying currency was added (for HitBTC).',
            'In the proxy module, the function of selling currency was added (for HitBTC).',
            'In Module of Price Notification, we added the function of checking the condition when it\'s necessary to notify the user (for HitBTC).',
            'At frontend, the logic of filtering pop-up list was moved to a separate service to improve the app architecture and an increase in productivity when using in several modules.',
            'At frontend in Exchange Order Management Module, we implemented the method which allows to set new orders ( for Binance, Bittrex, HitBTC).',
            'The module of Price Notification was tested and now is available for use.',
            'At frontend in Exhcnage Order Management Module, we implemented the method which allows to delete orders.',
            'At frontend in Exhcnage Order Management Module, we added the possibility to look through old done orders.'
        ]
    },
    {
        'date': '22/08/2018',
        'changes': [
            'At frontend, we added the support of new format of generating addresses for payment but currently, the work with FTEC wallets is only available.',
            'Images for tests and questions in Cryptoacademy were transferred to their own server.',
            'The code of the page of passing tests was adapted to the work with new structure of files with tests and questions.',
            'In the proxy module, new function of buying currency (for BitTrex) was added.',
            'In the proxy module, new function of selling currency (for BitTrex) was added.',
            'We added the possibility to confirm the request to withdraw referral funds in the admin panel.',
            'We fixed the error of unsustainable types when adding new questions to test.',
            'Logic in the component of passing the test was optimized and consume fewer system resources.'
        ]
    },
    {
        'date': '21/08/2018',
        'changes': [
            'In the proxy module, the function of buying currency (for Binance) was added.',
            'In the proxy module, the function of selling currency (for Binance) was added.',
            'In Module of Price Notification, we added the function of checking the condition when it\'s necessary to notify the user (for BitTrex).',
            'Tests and questions for Cryptoacademy were split into different JSON files.',
            'The model of tests and questions was optimized, we solved the problem of data redundancy.',
            'The code of the page with all available tests was changed for correct work with the new structure of tests and questions.',
            'We added the method of getting all questions of a separate test to Cryptoacademy service.'
        ]
    },
    {
        'date': '20/08/2018',
        'changes': [
            'In Module of Price Notification, we added the processing of error when the user enters non-existing pair (for Binance).',
            'In Module of Price Notification, we implemented the function which makes it possible to see all conditions when it\'s necessary to notify the user (for Bittrex).',
            'In Module of Price Notification, we added the function which deletes log when 7 days pass.',
            'In Exchange Order Management Module, we added the function which saves the condition when it\'s necessary to set an order(for Binance).',
            'We developed the architecture of the long-polling system of getting notifications at frontend.',
            'At frontend, the possibility to disable 2FA was added.',
            'We implemented the functionality for checking the code of 2FA when logging in the account at frontend.',
            'At frontend, we added the possibility to delete userpic.',
            'We began the implementation of the platform localization and necessary architecture.',
            'We fixed 403 error when sending requests to Binance.'
        ]
    },
    {
        'date': '17/08/2018',
        'changes': [
            'We implemented the possibility to enable 2FA to provide more security at frontend.',
            'In Module of Price Notification, we added the possibility to chose exchange among those where the pair is presented in a separate list.',
            'At frontend in Module of Price Notification, the possibility to choose types of user\'s notifications individually for each stop loss/take profit was added.',
            'We finished the implementation of the page with user\'s referral partners at frontend.',
            'The sender name was changed in emails from the system.',
            'In Module of Price Notification, the way of notification when the price reaches a certain level is shown for each stop loss and take profit at frontend.',
            'We fixed the error of sending proxy requests to exchanges for the app, launched via server-side rendering.'
        ]
    },
    {
        'date': '16/08/2018',
        'changes': [
            'In the main module, we changed the model of referral display in the function of getting all referrals (previously, you could get referral id and balance only, now referrals are divided into levels).',
            'In Module of Price Notification, we added the processing of error when the user enters non-existing pair (for Poloniex).',
            'The function of saving the current price of the pair was added in Module of Price Notification (for Poloniex).',
            'We configured automatic deleting of irrelevant data in the database.',
            'We optimized the system work with BTC node to carry out difficult payments.',
            'We added the support of Poloniex in Module of Price Notification at frontend (the possibility to set notifications for pairs from this exchange).',
            'We implemented the method of loading the pair price from Poloniex at frontend.'
        ]
    },
    {
        'date': '15/08/2018',
        'changes': [
            'In Module of Price Notification, we added the opportunity to specify types of notification when it\'s necessary to notify the user when saving the condition (conditions can vary).',
            'In Module of Price Notification, we added the processing of error when the user enters non-existing cryptocurrency (for Bittrex).',
            'The new test was added to the Cryptoacademy.',
            'We added the support of web and SMS notifications at the server.',
            'Questions of Cryptoacademy tests were divided into separated files to improve the efficiency of their reading.',
            'There was a common optimization of database, fields which are not necessary anymore were deleted.',
            'At backend, we added the possibility to add picture and questions to Cryptoacademy through API.',
            'The endpoint that returned information about all tests and questions now returns only main data about tests to optimize volumes of data obtained.',
            'At frontend, we implemented the possibility for the user to delete notifications about reaching a specific level.',
            'We implemented the possibility for the user to add a new notification when the price reaches a specific level at frontend.'
        ]
    },
    {
        'date': '14/08/2018',
        'changes': [
            'In Module of Price Notification, we added the function which deletes a condition from the database when condition is fulfilled.',
            'We added the error handling when the user enters a nonexistence pair in Module of Price Notification (for Binance).',
            'The function of saving the current price of the pair was added in Module of Price Notification (for HitBTC).',
            'Module of Price Notification was integrated to the main module.',
            'For all dropdown lists, at frontend we added the possibility to close them by clicking outside this list.',
            'We began the work on implementing the functionality for the work with his referral partners at frontend.',
            'We added the possibility to register, using the referral link at frontend.',
            'Module of Price Notification was integrated with notification service.',
            'At backend, the possibility to add and change Cryptoacademy tests through API was added.',
            'We implemented the possibility to get information about all relevant notification about reaching a specific level at frontend.'
        ]
    },
    {
        'date': '13/08/2018',
        'changes': [
            'We added the function of saving the condition when it\'s necessary to notify the user (for Poloniex) in Module of Price Notification.',
            'The function of calculating the difference between the current price for the pair and the price saved by the user was added in Module of Price Notification (for Binance).',
            'In Module of Price Notification, we added the function, which sends a notification to the user when the condition is fulfilled.',
            'We implemented the visual display of all available pairs and exchanges in a component of filtering dropdown.',
            'The function which saves condition as a file (logging) when the condition is fulfilled was added in Module of Price Notification.',
            'The functionality for full-fledged work with BTC node for payment was implemented.',
            'We developed the functionality for automatic adding tests to Cryptoacademy.',
            'On Module of Price Notification page, loading the relevant price for the pair from Binance, Bittrex, HitBTC was added.',
            'We fully implemented a slider for choosing a value from range to be used in Module of Price Notification and other components and modules of the application.',
            'We fully implemented a slider for choosing a value from range to be used in Module of Price Notification and other components and modules of the application.'
        ]
    },
    {
        'date': '10/08/2018',
        'changes': [
            'In Module of Price Notification, we added the function which makes it possible to see all notifications when it\'s necessary to notify the user (for Binance).',
            'Service of Trader\'s Behavioral Analysis was fully transferred to the proxy server at backend.',
            'Notification Module was fully integrated to Module of Price Notification, which enables working with this module on the page of all notification configurations.',
            'We also added the possibility to work with Module of Price Notification on the page of all notification configurations at frontend.',
            'At frontend, we implemented loading of the information about candlesticks from HitBTC for displaying the chart in Service of Trader\'s Behavioral Analysis.',
            'In Service of Trader\'s Behavioral Analysis, outdated recommendations are highlighted now.'
        ]
    },
    {
        'date': '09/08/2018',
        'changes': [
            'We added the function of saving the conditions when it\'s necessary to notify the user in Module of Price Notification (for HitBTC).',
            'We added the function of saving the current currency price in Module of Price Notification (for BitTrex).',
            'In Service of Trader\'s Behavioral Analysis, the possibility to work with Poloniex was added and tested.',
            'We improved the effectiveness of Telegram Assistant, using new framework.',
            'We developed and tested the integration of three methods of payment in the main module.',
            'Binance, BitTrex, and HitBTC now work correctly with API at frontend.',
            'We implemented the request for getting all available pairs from Binance, BitTrex, and HitBTC at frontend.',
            'The proxy server for sending the requests from frontend to API exchanges was configured.'
        ]
    },
    {
        'date': '08/08/2018',
        'changes': [
            'In Service of Trader\'s Behavioral Analysis, we added the function that makes it possible to see the last user\'s deals from Poloniex API.',
            'In Service of Trader\'s Behavioral Analysis, we added the function that makes it possible to see candles for user\'s deals from Poloniex API.',
            'In Service of Trader\'s Behavioral Analysis, we added the function of calculating statistics for user\'s deals from Poloniex API.',
            'In Service of Trader\'s Behavioral Analysis, we added the function of generating the recommendations for statistics of user\'s deals from Poloniex API.'
        ]
    },
    {
        'date': '07/08/2018',
        'changes': [
            'In Module of Price Notification, we added the function of deleting the condition when it\'s necessary to notify the user.',
            'We began the connection of new exchange (Poloniex) in Service of Trader\'s Behavioral Analysis.',
            'Validation of API keys is moved from Service of Trader\'s Behavioral Analysis to Proxy module.',
            'We made a slider for Module of Price Notification and Exchange Order Management Module.'
        ]
    },
    {
        'date': '06/08/2018',
        'changes': [
            'Tweets amount limit is added in social module.',
            'Emailing feature is added on Forgot Password page.',
            'We reviewed database architecture to avoid illogical data storage with the help of implementation of limitations.',
            'The function of displaying the pop-up was added.',
            'We changed the interval of candle building for HitBTC, which will improve the speed of the work of Service of Trader\'s Behavioral Analysis.',
            'In Module of Price Notification, we added the function of maintaining conditions when it\'s necessary to notify the user (for Bittrex only).',
            'In Module of Price Notification, we added the function of saving current price for the pair (for Binance only).',
            'We began the work on getting candles from Binance for Service of Trader\'s Behavioral Analysis.',
            'Interface and models for the work with various exchanges were specified at frontend.',
            'Module of Price Notification now uses proxy servers for additional security.'
        ]
    },
    {
        'date': '03/08/2018',
        'changes': [
            'Key deleting feature is added on My Exchanges page.',
            'In Traders Behaviors connection with proxy module is integrated to improve safety while using third party APIs (for HitBTC).',
            'Development of Price Notification module has started.',
            'In Price Notification module function of saving circumstances when to notify user is added (only for Binance).',
            'On dashboard page possibility to connect API keys is added.',
            'API keys that are already connected are now displayed on the dashboard.',
            'On payment page, a choice of which currency to pay with for services is added.',
            'Integration works between database and general project structure were conducted for cooperation with BTC node.',
            'Ability of connecting Ether, BTC, FTEC was added.',
            'A new test mechanism of payment with ETH, BTC, FTEC was developed.'
        ]
    },
    {
        'date': '02/08/2018',
        'changes': [
            'When the request for withdrawal is sent, the amount of gas needed is calculated automatically and the user receives a notification if there`s no enough credits.',
            'Proxy server was set up to work with private requests with HitBTC,Binance, and BitTrex.',
            'A table with last logins from devices is added to a dashboard page.',
            'Caching is added for increasing effectiveness of work with exchanges.',
            'A feature that allows users to remove all notifications of a certain type on the page with all notifications is enabled.',
            'Preloader added to the table when request is being sent.',
            'Bug, that banned users connected to one system (router) was fixed.',
            'Connection with proxy module in Traders behavior was integrated, that will improve the security of cooperation with third-party APIs (only for Binance).',
            'Twitter API filtering was changed that will speed up the work of social module.',
            'Cache clearing after logout was added.'
        ]
    },
    {
        'date': '01/08/2018',
        'changes': [
            'Library optimization in main module is upgraded to increase the speed of its work.',
            'Feature that allows users to receive their closed deals was added from Behavior Service without creating new windows (for HitBTC)',
            'Recommendations are added to Behavior Service statistics.',
            'Login captcha is fixed',
            'Pop-up for users without verified email address was fixed.',
            'User`s real balance is added on dashboard and header.',
            'Android app is upgraded.',
            'iOS app is upgraded.',
            'Integration of Behavior Analyzer with proxy server has begun.',
            'On Behavioral Analyser page preloader was added to statistics block during the request.'
        ]
    },
    {
        'date': '31/07/2018',
        'changes': [
            'Protection against spam attacks of our mailing service is added.',
            'Proxy service is fixed.',
            'AProxy service was integrated with proxy server №1 and tested.',
            'On behavioral page button disabled if exchange is not selected.',
            'We added the page which is shown after a successful change of password.',
            'The page of Service of Trader\'s Behavioral Analysis was launched to main server.',
            'We added  user\'s real balance in the website header.',
            'A feature that shows all closed deals of the user from Behavioral Service without starting new windows (for BitTrex).',
            'Feature that returns all logs of the user is now on administration panel.',
            'Device used to log in is now saved in authentication logs.'
        ]
    },
    {
        'date': '30/07/2018',
        'changes': [
            'Keys are synchronized from the page my exchanges now.',
            'We added sorting of data by chosen exchange or all exchanges.',
            'Authentication logs are now deleted after 7 days.',
            'We added the possibility to view API keys which were connected by the user (the first 4 symbols).',
            'The interval of candle building for Binance API was changed, which will improve the speed of the work of Service of Trader\'s Behavioral Analysis.',
            'We developed the mechanism of intelligent choice of appropriate proxy for the work with exchange.',
            'We developed the mechanism of developer email notification for the case when the proxy was banned.',
            'The architecture of the proxy server was developed.',
            'We added displaying of the number of remaining ban days.',
            'Data is fully loaded from various exchanges now on behavioral page.'
        ]
    },
    {
        'date': '27/07/2018',
        'changes': [
            'We added the function for getting all user\'s closed deals from Service of Trader\'s Behavioral Analysis without making windows for them (for Binance).',
            'We added the function of saving API keys for exchange HitBTC.',
            'On the dashboard, a correct number of tokens is shown now.',
            'The button of balance replenishment has correct navigation now on the dashboard.',
            'We added and adapted sidebar on the payment page.',
            'We fixed a bug on the page with test displaying if there are more than 4 of them.',
            'We increased the functionality of the proxy server for the work with exchanges.',
            'We updated the interaction between Arbitrage Module and proxy server to increase the speed of requests.',
            'We began the development of a mechanism of intelligent choice of the most appropriate proxy server.',
        ]
    },
    {
        'date': '26/07/2018',
        'changes': [
            'In the main module, we added the feature of displaying all authorization logs for the user.',
            'In the main module, we added the feature of displaying pages of authorization logs.',
            'On each page, 5 logs are displayed. Now logs are sorted by date (new first).',
            'The page of password sending was adapted.',
            'We did HTML layout and adaptation of the page after successful sending of the letter with password recovery.',
            'Pop-up of limitation of modules for users without activation letter.',
            'Pop-up of limitation of modules was adapted.',
            'We improved the safety of password storage.',
            'We fixed the bug, with which user was able to get more than 1 address in less than 2 days.',
            'TWe added support of Cyrillic script in tickets and comments.',
            'We added an error processing while token withdrawal in case when there are not enough ETH.'
        ]
    },
    {
        'date': '25/07/2018',
        'changes': [
            'We added an automatic conversion of pictures for Cryptoacademy.',
            'We fixed the bug of passing of unauthenticated user to module pages.',
            'Frontend was made on Service of Trader\'s Behavioral Analysis page.',
            'Charts were made on Service of Trader\'s Behavioral Analysis page.',
            'We fixed the bug with which user was able to send a request for referral funds withdrawal many times (even if he didn\'t have these funds).',
            'We fixed display of pictures in 4th and 5th tests.',
            'In the main module, we added logging of login authorization.',
            'We made and tested changes in the new production version',
            'We begin to take commissions for the services of the social module on a fee basis',
            'The function of saving the API of user keys for the Bittrex exchange is added.'
        ]
    },
    {
        'date': '24/07/2018',
        'changes': [
            'Now all the user\'s records are deleted and Telegram is automatically linked while deleting the account.',
            'Userpics are automatically converted to 100x100 while uploading.',
            'HTML layout of balance refill',
            'We adapted the page of balance refill.',
            'We fixed the bug which occurred while connecting to Telegram Assistant.',
            'In the main module, we added the feature, which allows the user to see the information about his referrals.',
            'In the main module, we added the feature, which allows the user to charge funds for his referrals.',
        ]
    },
    {
        'date': '23/07/2018',
        'changes': [
            'We added the possibility to resend email verifications.',
            'Spam protection was added.',
            '2FA was added.',
            'We fixed a critical error of database migration, which jeopardized further development of the project.',
            'In Service of Trader’s Behavioral Analysis, we fixed an error in the calculation of lost profit.',
            'Refactoring of pages for at frontend to improve statistics.',
            'We added graphs, using the library in Service of Trader’s Behavioral Analysis at frontend.',
            'Modules are divided into groups now (profile, modules, change modules).'
        ]
    },
    {
        'date': '20/07/2018',
        'changes': [
            'We made both types of the pop-up no refferal page.',
            'HTML layout and adaptation of the page of password recovery.',
            'HTML layout and adaptation of the page of setting a new password.',
            'We added two more steps to 2FA connection.',
            'API keys of exchanges are encrypted in the database.',
            'From now, funds are charged for statistics update in Service of Trader\'s Behavioral Analysis.',
            'We added the possibility to delete API keys for exchanges in the main module.',
            'Exchange API keys are now decrypted before sending a request.',
            'If the user doesn\'t have enough funds to pay for statistics update, he will see the relevant error in Service of Trader\'s Behavioral Analysis.',
            'We fixed a critical error while registration.'
        ]
    },
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
            'We made a globalPreloader for separate loading elements',
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
            'We added new globalPreloader for elements uploaded from the server',
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
            'Animated globalPreloader for uploading of cryptocurrency rates in the dashboard',
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
