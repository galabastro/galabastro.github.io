$(function(){
    $(document).ready(function() {
		$('#title').hide();
		if ($('.check-mobile').css('float') == 'none') {
			$('#page-container').fadeIn('slow', function() {
				$('#typewriter-title').addClass('typewriter-mobile');
				load_title('#title');
				type_message('#typewriter-title', 'Software_Novelist', 100, load_novel_landing, true);
				// type_message('#typewriter-title', 'Software_Novelist', 100, load_novel_landing);
			});
		} else {
			$('#page-container').fadeIn('slow', function() {
				load_title('#title');
				type_message('#typewriter-title', 'Software_Novelist', 100, load_novel_landing);
			});
		}	
        function load_novel_landing(is_mobile = null) {
			if (is_mobile) {
				console.log('You got here.');
				$('#title').animate({
					width: '100%',
					height: '10vh'
					}, 'slow', 'swing', function() {
						$('#console').width('100%').css('padding-top', '10vh').slideToggle('fast');
						$('#book-cover').hide();
						load_table_of_contents();
					});
			} else {
				$('#title').stop().removeClass('container-fluid').animate({
					width: '40%',
					height: '10vh'
					}, 'slow', 'swing', function() {
						$('#book-cover').slideDown('fast');
						$('#console').slideToggle('slow');
						load_table_of_contents();
					});
			}
            return false;
        }
        function load_table_of_contents() {
			var table_of_contents = $('#loading-toc').text();
			$('#loading-toc').text('');
			type_message(
				'#loading-toc',
				'Loading Table of Contents .........................',
				5,
				function() {
					$('#loading-toc').append('DONE!');
					load_foreword();
				}
			)
        }
	});
	
    function load_foreword() {
        type_message(
            '#loading-foreword', 
            'Loading Foreword ............................', 
            5,
            function() {
				$('#loading-foreword').append('DONE!');
				load_chapter_1();
			}
		)
	}
	
    function load_chapter_1() {
		type_message(
			'#loading-chapter-1',
			'Loading Chapter 1: Introduction ..........................',
			5,
			function() {
				$('#loading-chapter-1').append('DONE!');
				load_chapter_2();
			}
        )
	}
	
    function load_chapter_2() {
		type_message(
			'#loading-chapter-2',
			'Loading Chapter 2: My Projects .......................',
			5,
			function() {
				$('#loading-chapter-2').append('DONE!');
				load_about_the_author()
			}
        )
	}
	
    function load_about_the_author() {
		type_message(
			'#loading-about-the-author',
			'Loading About the Author .......',
			5,
			function() {
				$('#loading-about-the-author').append('ERROR!');
				$('#loading-about-the-author').append('<br />');
				$('#loading-about-the-author').append('ERRNO[HY000]: Error. Author still writing the site.');
			}
        )
    }
    
    function load_title(element, speed = 'slow') {
        $(element).slideDown(speed);              
        $(element).fadeIn(speed);
    }
    
    /**
     * This types on element on the DOM with the typewriter effect.
     * 
     * @param object element DOM element   
     * @param string message Message to be typed in DOM element
     * @param int type_speed Speed message will be typed
     * @param function callback_function (optional) Function called after completion
     *
     * @return void
     */
    function type_message(element, message, type_speed, callback_function = null, is_mobile = null) {
        // Check to make sure element passed in has the class typewriter
        if (!$(element).hasClass('typewriter')) {
        	$element.addClass('typewriter');	
        }
    
        // Remove the class .typewriter-disabled
        $(element).removeClass('typewriter-disabled');
    
        // Initialize variables
        var i = 0;
        type_next_letter = function() {
			$(element).append(message[i]);
            i++;
            if (i < message.length) {
            	setTimeout(type_next_letter, type_speed);
            } else {
            	$(element).addClass('typewriter-disabled');
				if (callback_function != null) {
					callback_function(is_mobile);
				}
            return false;
            }
        }
        setTimeout(type_next_letter, type_speed);      
    }
}(jQuery))