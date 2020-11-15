import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'
import './styles.css'

function RedQueenRace() {
  /* Background animations */
  const sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
  };

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

  //   const background1 = document.getElementById('background1');
  //   const background2 = document.getElementById('background2');

  //   const background1Movement = background1.animate(
  //   sceneryFrames, sceneryTimingBackground);
  //   background1Movement.currentTime = background1Movement.effect.timing.duration / 2;

  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  // const background2Movement = background2.animate(
  //   sceneryFrames, sceneryTimingBackground)const
  //   const foreground1 = document.getElementById('foreground1');
  //   const foreground2 = document.getElementById('foreground2');

  //   constforeground1Movement = foreground1.animate(
  //   sceneryFrames, sceneryTimingForeground);
  //   foreground1Movement.currentTime = foreground1Movement.effect.timing.duration / 2;

  //   const foreground2Movement = foreground2.animate(
  //   sceneryFrames, sceneryTimingForeground);

  const spriteFrames = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" },
  ];

//   const redQueen_alice_sprite = document.getElementById(
//     "red-queen_and_alice_sprite"
//   );

const redQueen_alice_sprite = useWebAnimations({
    keyframes: spriteFrames,
    timing: {
        easing: "steps(7, end)",
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity,}

})

//   const redQueen_alice = redQueen_alice_sprite.animate(spriteFrames, {
//     easing: "steps(7, end)",
//     direction: "reverse",
//     duration: 600,
//     playbackRate: 1,
//     iterations: Infinity,
//   });

//   /* Alice tires so easily! 
//     Every so many seconds, reduce their playback rate so they slow a little. 
//   */
//   const sceneries = [
//     foreground1Movement,
//     foreground2Movement,
//     background1Movement,
//     background2Movement,
//   ];

//   const adjustBackgroundPlayback = function () {
//     if (redQueen_alice.playbackRate < 0.8) {
//       sceneries.forEach(function (anim) {
//         anim.playbackRate = (redQueen_alice.playbackRate / 2) * -1;
//       });
//     } else if (redQueen_alice.playbackRate > 1.2) {
//       sceneries.forEach(function (anim) {
//         anim.playbackRate = redQueen_alice.playbackRate / 2;
//       });
//     } else {
//       sceneries.forEach(function (anim) {
//         anim.playbackRate = 0;
//       });
//     }
//   };
//   adjustBackgroundPlayback();

  /* If Alice and the Red Queen are running at a speed of 1, the background doesn't move. */
//   /* But if they fall under 1, the background slides backwards */
//   setInterval(function () {
//     /* Set decay */
//     if (redQueen_alice.playbackRate > 0.4) {
//       redQueen_alice.playbackRate *= 0.9;
//     }
//     adjustBackgroundPlayback();
//   }, 3000);

//   const goFaster = function () {
//     /* But you can speed them up by giving the screen a click or a tap. */
//     redQueen_alice.playbackRate *= 1.1;
//     adjustBackgroundPlayback();
//   };

//   document.addEventListener("click", goFaster);
//   document.addEventListener("touchstart", goFaster);

  return (
    <div>
      <div class='wrapper'>
        <div class='sky'></div>
        <div class='earth'>
          <div id='red-queen_and_alice'>
            <img
              id='red-queen_and_alice_sprite'
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png'
              srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x'
              alt='Alice and the Red Queen running to stay in place.'
              ref={redQueen_alice_sprite.ref}
            />
          </div>
        </div>

        <div class='scenery' id='foreground1' ref={foreground1Movement.ref}>
          <img
            id='palm3'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x'
            alt=' '
          />
        </div>
        <div class='scenery' id='foreground2' ref={foreground2Movement.ref}>
          <img
            id='bush'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x'
            alt=' '
          />
          <img
            id='w_rook_upright'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x'
            alt=' '
          />
        </div>
        <div class='scenery' id='background1' ref={background1Movement.ref}>
          <img
            id='r_pawn_upright'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x'
            alt=' '
          />
          <img
            id='w_rook'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x'
            alt=' '
          />
          <img
            id='palm1'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x'
            alt=' '
          />
        </div>
        <div class='scenery' id='background2' ref={background2Movement.ref}>
          <img
            id='r_pawn'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x'
            alt=' '
          />

          <img
            id='r_knight'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x'
            alt=' '
          />
          <img
            id='palm2'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png'
            srcset='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x'
            alt=' '
          />
        </div>
      </div>
    </div>
  );
}

export default RedQueenRace
