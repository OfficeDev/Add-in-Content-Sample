       ____            _             _        _       _     _       _       
      / ___|___  _ __ | |_ ___ _ __ | |_     / \   __| | __| |     (_)_ __  
     | |   / _ \| '_ \| __/ _ \ '_ \| __|   / _ \ / _` |/ _` |_____| | '_ \ 
     | |__| (_) | | | | ||  __/ | | | |_   / ___ \ (_| | (_| |_____| | | | |
      \____\___/|_| |_|\__\___|_| |_|\__| /_/   \_\__,_|\__,_|     |_|_| |_|
                                                                            

This sample showcases a simple Add-in for Office that lets you get data from a document. 

Follow these steps to run the sample:

===================================================================================

If you have Office 2013 or later on Windows:

1. Host these files on a local network share.

2. Open up an Office app (e.g. Excel or whatever you're interested in), open a document, and then select File > Options > Trust Center > Trust Center Settings > Trusted App Catalogs. 

3. Type the location of the directory on your local network share into the Catalog Url text field, and click Add Catalog. Make sure the Show in Menu check box is selected.

4. Click OK. Close the Office app and launch it again so the changes take effect.

5. Go to Insert > My Apps > Shared Folder and select My First Content Add-in, and then click Insert. If you don't see the Add-in, click Refresh.

6. The Add-in is inserted in the middle of your document.

For more information, please read: https://msdn.microsoft.com/EN-US/library/office/fp123503.aspx

====================================================================================

If you don't have Office 2013 or later, or are not using Windows:

1. Host these files online (e.g. AWS, Azure, Heroku, etc). In the manifest.xml file, change the default value of the SourceLocation to point to the URL where the index.html file is hosted.

2. Go to the Office 365 portal (https://portal.office.com) and click on Admin in the app launcher on the top left hand corner.

Note: You need to already have a subscription to Office 365. If you don't have one, obtain a free account for 30 days from https://portal.microsoftonline.com/Signup/MainSignUp.aspx?OfferId=6881A1CB-F4EB-4db3-9F18-388898DAF510&DL=DEVELOPERPACK

3. Select SharePoint > apps > App Catalog > Apps for Office.

4. Select the "+" button to add a new Add-in, and choose the manifest.xml file from your local directory. Press OK and the Add-in will install.

5. Open the app launcher on the top left hand corner and select an Office app (e.g. Excel or whatever you're interested in).

6. When the Office app opens, go to Insert > Apps for Office and select My First Content Add-in under My Organization. If you don't see the Add-in, press Refresh. Press Insert and the Add-in should appear.

For more information, please read: https://msdn.microsoft.com/EN-US/library/office/fp123517.aspx

===================================================================================

You can also open this sample in the playground for Office Add-ins: http://aka.ms/Lgaz15 
