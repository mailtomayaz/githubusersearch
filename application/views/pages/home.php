<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<h1>Home page</h1>



        <h3><?php //echo $page_item['title']; ?></h3>
        <div class="main">
                <?php //echo $page_item['text']; ?>
        </div>
        <p><a href="<?php //echo site_url('news/'.$page_item['slug']); ?>">View article</a></p>

<?php
$attributes = array('name' => 'usercheck','id'=>'usercheck');
echo form_open('pages/searchuser',$attributes); ?>

    <label for="title">Title</label>
    <input type="input" name="title" id="username" /><br />
    <input type="hidden" id="con_pag" value='1' />

<!--    <label for="text">Text</label>
    <textarea name="text"></textarea><br />-->

    <input id="getuser" type="submit" name="submit" value="Create news item" />

</form>
<div id="notification-bar"></div>
<div id="userhandle"> </div>
<div class="follower_count"></div>
<div class="followers_avatar"></div>
<a href="#" id="load_more" >Show More</a>