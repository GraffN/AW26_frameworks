THIS PIECE OF CODE IS NOT CREATED BY ME
its only a copy paste from https://www.jqueryscript.net/slider/Slideshow-Carousel-jQuery-Carrusel.html

as a school assignment

------------------------------------

How to use carrusel
please create a new folder called "assets" inside your root directory for the project you are working on.
In the assets folder please create two new folder called "js" and "css"

then you need to download the "carrusel-navegation.js" and "styleCarruselNavegation.css" file.
please paste those new files in the JS and CSS folders respectively.

Create a index.html file in your root directory.

we also need to use some other dirrectories to display the carrusel correctly
the first one is bootstrap. please paste "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" in the head of your project

then we need awesome fonts. please paste "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" in the head of your project

This is a jQuery carrusel so you need the latest verion of Jquery
please create a script tag just before the closing body tag and paste "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" in the script tags source

now we just have to link the "carrusel-navegation.js" just after the jQuery link (make sure that jQuery is linked before the carrausel link. if not done correctly the code will fail)


then finaly, for displaying the correct images you type inn the following line of code in your html project and change the pictures to your pictures

<ul class="list-images">
                        <!--place all carrusel images inn here like the example below shows-->
                        
                        <li><img src="https://placeimg.com/600/400/animals"></li>
                        

                        <li><img src="https://placeimg.com/600/400/nature"></li>

                        <li><img src="https://placeimg.com/600/400/people"></li>

                        <li><img src="https://picsum.photos/600/400/?random"></li>
                        
                    
                   </ul>
                   <ol class="navegation">
                      
                        <!--Navigation arrows -->
                       
                        <li class="left iconsDefaultColor"><span class="fa fa-arrow-left"></span></li>
                        
                        <li class="right iconsDefaultColor"><span class="fa fa-arrow-right"></span></li>
                   </ol>