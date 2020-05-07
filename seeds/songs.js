
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {
          title: 'Jack and Diane',
          author: 'John Mellencamp',
          lyrics: "A little ditty 'bout Jack & Diane. Two American kids growing up in the heart land. Jack he's gonna be a football star. Diane debutante in the back seat of Jacky's car. Suckin' on chilli dog outside the Tastee Freez. Diane sitting on Jacky's lap. Got his hands between her knees. Jack he says: \"Hey, Diane, let's run off behind a shady tree. Dribble off those Bobby Brooks. Let me do what I please\". Saying oh yeah, Life goes on, long after the thrill of living is gone. Sayin' oh yeah, Life goes on, long after the thrill of living is gone"
        },
        {
          title: 'Danger Zone',
          author: 'Kenny Loggins',
          lyrics: "Revvin' up your engine. Listen to her howlin' roar. Metal under tension. Beggin' you to touch and go. Highway to the danger zone. Ride into the danger zone. Headin' into twilight. Spreadin' out her wings tonight. She got you jumpin' off the track. And shovin' into overdrive. Highway to the danger zone. I'll take you. Ridin' into the danger zone",
        },
        {
          title: 'Hit Me with Your Best Shot',
          author: 'Pat Benatar',
          lyrics: "Well you're a real tough cookie with a long history, Of breaking little hearts like the one in me. That's okay, let's see how you do it. Put up you dukes, let's get down to it. Hit me with your best shot. Why don't you hit me with your best shot. Hit me with your best shot. Fire away",
        },
      ]);
    });
};
