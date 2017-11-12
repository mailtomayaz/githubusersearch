/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* Global JavaScript File for working with jQuery library */

// execute when the HTML file's (document object model: DOM) has loaded
$(document).ready(function () {
    $('#getuser').click(function (e) {
        e.preventDefault();
        //ajax get call to query users
        var username = $('#username').val();
        //get handle
       var path = $('#usercheck' ).attr( 'action' );
        function gethandle(usr){
             $.get(path+"/"+usr,
                function (data, status) {
                    if (status === 'success') {
                        $('#notification-bar').text('The page has been successfully loaded');
                        //get followers;
                        $('#userhandle').html(data);
                        console.log(
                                data['items'][0]['login'] + ':login name:' + data['items'][0]['url']
                                );
                    } else {
                        $('#notification-bar').text('An error occurred');
                    }
                    // alert("Data: " + data + "\nStatus: " + status);
                });
        }     
        //user handle data
        var datahandle = gethandle(username);
        
        function getFollowers(usr, pg) {
            var folUrl = path +'/'+usr+'/'+ pg;
           // alert(folUrl);
            $.get(folUrl,
                    function (data, status) {
                        if (status === 'success') {
                            //get followers;
                           // console.log(data.length);
                            var followerCount = '';
                            if (data.length < 99) {
                                followerCount = data.length;
                            }
                        $('.followers_avatar').html(data);
                          
                        } else {
                            $('#notification-bar').text('An error occurred');
                        }
                        
                    });
        }
        
        var datafollowrs = getFollowers(username,1);
        //get followers
          

        //get followers count


        //get followers
//
//        var folUrl = 'https://api.github.com/users/' + username + '/followers?per_page=100';
//        $.get(folUrl,
//                function (data, status) {
//                    if (status === 'success') {
//                        //$('#notification-bar').text('The page has been successfully loaded');
//                        //get followers;
//                        // var folUrl = 'https://api.github.com/users/'+username+'/followers';
//                        console.log(data.length);
//                        var followerCount = '';
//                        if (data.length < 99) {
//                            followerCount = data.length;
//                        }
//                        var htmldata = '';
//                        var tsts = 'aaaaaaaaaaaaaaaaa';
//                        htmldata = '<table>';
//                        htmldata += '<th>Github Name</th>';
//                        htmldata += '<th>Github Avatar</th>';
//                        $.each(data, function (i, item) {
//                            htmldata += '<tr><td>'
//                            htmldata += data[i].login + '</td><td>';
//                            htmldata += '<img width="100" height="100" src=' + data[i].avatar_url + '/></td></tr>';
//
//                            // console.log(data[i].login);
//                            // console.log(data[i].avatar_url);
//                        });
//                        htmldata += '</table>';
//                        $('.followers_avatar').html(htmldata);
//
//                        console.log(htmldata);
//                        console.log(
//                                "followers:" + data.length + "--list--" + data
//                                );
//
//
//
//
//                    } else {
//                        $('#notification-bar').text('An error occurred');
//                    }
//                    // alert("Data: " + data + "\nStatus: " + status);
//                });
//        //get user handle(username);
//
//        $.get("https://api.github.com/search/users?q=" + username,
//                function (data, status) {
//                    if (status === 'success') {
//                        $('#notification-bar').text('The page has been successfully loaded');
//                        //get followers;
//
//
//
//
//                        console.log(
//                                data['items'][0]['login'] + ':login name:' + data['items'][0]['url']
//                                );
//
//
//
//
//                    } else {
//                        $('#notification-bar').text('An error occurred');
//                    }
//                    // alert("Data: " + data + "\nStatus: " + status);
//                });
        //more button

        $('#load_more').click(function (e) {

        });

      
        

    });


    //      
    //      
//      $.post('https://api.github.com/search/users?q=mailtomayaz',
//      
// 
//      // when the Web server responds to the request
//      function(result) {
//        // clear any message that may have already been written
//        $('#bad_username').replaceWith('');
//         
//        // if the result is TRUE write a message to the page
//        if (result) {
//          $('#username').after('<div id="bad_username" style="color:red;">' +
//            '<p>(That Username is already taken. Please choose another.)</p></div>');
//        }
//      }
//    );



});