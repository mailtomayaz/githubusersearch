<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>
<h1>Home page</h1>



        <h3><?php echo $page_item['title']; ?></h3>
        <div class="main">
                <?php echo $page_item['text']; ?>
        </div>
        <p><a href="<?php echo site_url('news/'.$page_item['slug']); ?>">View article</a></p>

<?php echo form_open('pages/searchuser'); ?>

    <label for="title">Title</label>
    <input type="input" name="title" /><br />

    <label for="text">Text</label>
    <textarea name="text"></textarea><br />

    <input type="submit" name="submit" value="Create news item" />

</form>