# ILLIAD-accessible-html-8.0
WCAG Accessibility compliant and responsive public facing web files for ILLiAD and IDS

These files are intended to replace your existing ILLiAD web files, or serve as a template for you to make your IlliAD web files meet WCAG 2.0 Web Content Accessibility standards.

Remember to back up all your existing web files (ie anything with these extensions: html, shtml, css, inc).

You should be able to rename these files as test or set up a test ILLiAD directory where you can preview look and feel of the pages before you replace them on your live site.

If you want to replace your web files completely with the ones in this repository, you must also add these sub directories (or add the files to your respective sub directories if they already exist):

    \styles\
      Gist4Web.css (required) 
      \fonts\ subdirectory (not required but useful)
    

    \includes\  (all files required; ones listed below are absolutely required)
  
      drupalheader_responsive.inc  
      drupalfooter_responsive.inc 
      include_menu.html
      include_menu_you_are_logged_in_as.html
      include_notification_preferences.html
  

    \Lending\   (all files required)

  
You can also copy the form code from within the html files and replace the code in your html files. 

Most of the web files and css files are commented with explanations of code changes and 'where to put things like your logo.'

Please look through the \screenshots\ directory and corresponding readme file. These screenshots demonstrate how the Accessible files display on SUNY Geneseo Milne Library instance of ILLiAD. 

Public-visible examples:
https://illiad.geneseo.edu/
https://illiad.geneseo.edu/lending/lendinglogon.html


This presentation highlights the "why and how" of changes made to our ILLiAD web files:
https://go.geneseo.edu/ILLiADAccessForAll


Please contact me via rootl@geneseo.edu if you have any questions.
