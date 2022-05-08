<?php
    
  get_header();
  
?>
    <main role="main">

      <section>

        <article>

          <?php if (have_posts()): while (have_posts()) : the_post(); ?>

            <h2>
              <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
            </h2>

            <?php the_content(); ?>

          <?php endwhile; ?>

          <?php else: ?>

            <h1>Nothing to show</h1>

          <?php endif; ?>

        </article>

      </section>
      
    </main>
<?php

  get_footer();

?>
