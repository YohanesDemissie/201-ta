# Manipulating the DOM
REVIEW LAST 10 MINUTES OF LECTURE FOR THOROUGH BREAK DOWN OF LAB AND EXPECTATINOS

###### Object/key value pair PG 101 PROPERTY(KEY VALUE PAIRS)/METHODS
var document = {
  html: { //object
    head: { //object
      title: { //object
        textContent: "DOM Demo" //property
      }
    },
    body: { //object
      main: { //object
        ul: { //object
          id: "stuff", //property
          children: [ //property
            {
              li: { 
                textContent: "Item a"
              },
              li: {
                textContent: "Item b"
              },
              li: {
                textContent: "Item c"
              }
            }
          ]
        }
      }
    }
  }
}

 ##### MARK UP Version of JS markup above
<!DOCTYPE html>
  <html>
    <head>
      <title> DOM Demo </title>
    </head>
    <body>
      <main>
        <ul id="stuff">
          <li> Item A</li>
          <li> Item B</li>
          <li> Item C</li>
        </ul>
      </main>
  <html>

  ######### ASSIGNEMTN RUN DOWN!!!
  - create a class and title <h1> that represenets a location
  - create a  ul with an ID that can be manipulated in the DOM or console for user to add data
  - repeat these steps for multiple store locations

  element.childNodes; //prints all chilren nodes as key value pairs, key being "text" and value being the obvious

