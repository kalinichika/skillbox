import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar}
            src='https://cdn.dribbble.com/users/24158/screenshots/3990796/batman.jpg'
            alt='avatar'/>
            <a href='#user-url' className={styles.userName}>
              Виктория Калинина 
            </a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}> опубликовано </span>
            4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href='#post-url' className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности 
          </a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img className={styles.previewImg} src="https://cdn.dribbble.com/users/1090020/screenshots/14413782/media/faea5fc85a5d10af253f830be5105781.jpeg" 
        />
        </div> 

      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5"fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      </div> 

      <div className={styles.controls}>
        
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
            </svg>
          </button>
          <span className={styles.karmaValue}>234</span>
          <button className={styles.down}>
            <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
            </svg>
          </button>
        </div>

        <button className={styles.commentsButton}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 550 510" fill="none">
		        <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M408,306H102v-51 h306V306z M408,229.5H102v-51h306V229.5z M408,153H102v-51h306V153z" fill="#C4C4C4"/>
          </svg>
          <span className={styles.commentsNumber}>24</span>
        </button>

        <div className={styles.actions}>
          <button className={styles.shareButton}>
            <svg width="12" height="12" viewBox="3 2 22 22" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M18 16.1365C17.24 16.1365 16.56 16.4378 16.04 16.9096L8.91 12.743C8.96 12.512 9 12.2811 9 12.0402C9 11.7992 8.96 11.5683 8.91 11.3373L15.96 7.21084C16.5 7.71285 17.21 8.0241 18 8.0241C19.66 8.0241 21 6.67871 21 5.01205C21 3.34538 19.66 2 18 2C16.34 2 15 3.34538 15 5.01205C15 5.25301 15.04 5.48394 15.09 5.71486L8.04 9.84137C7.5 9.33936 6.79 9.02811 6 9.02811C4.34 9.02811 3 10.3735 3 12.0402C3 13.7068 4.34 15.0522 6 15.0522C6.79 15.0522 7.5 14.741 8.04 14.239L15.16 18.4157C15.11 18.6265 15.08 18.8474 15.08 19.0683C15.08 20.6847 16.39 22 18 22C19.61 22 20.92 20.6847 20.92 19.0683C20.92 17.4518 19.61 16.1365 18 16.1365Z" fill="white"/>
            </svg>
          </button>
          
          <button className={styles.saveButton}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 426.667 440" fill="none">
              <path d="M42.667,85.333H0V384c0,23.573,19.093,42.667,42.667,42.667h298.667V384H42.667V85.333z" fill="white"/>
              <path d="M384,0H128c-23.573,0-42.667,19.093-42.667,42.667v256c0,23.573,19.093,42.667,42.667,42.667h256 c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M362.667,192h-85.333v85.333h-42.667V192h-85.333 v-42.667h85.333V64h42.667v85.333h85.333V192z" fill="white"/>
            </svg>
          </button>
        </div>

      </div>
      
    </li> 
  );
}
