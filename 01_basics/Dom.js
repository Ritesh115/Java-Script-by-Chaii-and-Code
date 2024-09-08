//DOM 
// document object model => when we want to manipulate HTML file  with the help of  js we use DOM;
//jo bhi document ham bana rahe hai like html , vo sab ak object he to //hai like head and body ..and vo document kis tara se structure hai is //DOM..

//P-1 accessing element by ID
// const parent = document.getElementById('parent')
// parent.style.color = 'red'

//p-2 how to manuplate  textnode
// parent.innerText => teels about the  content which is visible ..
//parent.textContent => tells the actual content  which is there if it hidden also.
//parent.innerHTML +> gives entire text inclyding tags which is there in text node also



//QUERY SELECTOR  => it select one element only and then yoy can perform the task ...
//is Used to select the first element of ant tags or selectors..

// document.querySelector('yl')
// null

// document.querySelector('ul')
// <ul>​…​</ul>​

// document.querySelector('li')

// <li>​…​</li>​::marker​"a"</li>​

// const var = document.querySelector('li')

// const  ul = document.querySelector('ul')
// undefined
// const tyrnGreen = ul.querySelector('li')
// undefined
// tyrnGreen.style.color = 'red'
// 'red'


//querySelectorall => it select the entire tag or elements. and retyrns the NODEARRAY which is different from array.

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]

// const li = document.querySelectorAll('li')
// undefined

// li[0].style.color = 'red' // can be access similar to array.
// 'red'



//WE CAN CONVERT TML-COLLECTION into array from ,,, Array.from() method.
//yse the styles.


//innertext
//innerHTML
//textcontent

//getElementByClassName retyens the htmlCollection.

