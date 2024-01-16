import React from 'react'
import styles from '@/app/[slug]/stylepage.module.css'
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comment from '@/components/comments/comment';

function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quisquam?</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image width={50} height={50} src='/p1.jpeg' className={styles.userImage} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span>Tushar patil</span>
                            <span>01.01.202</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='Image' className={styles.blogImage} width={600} height={400} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}> 
                    <h1>The whole blog contain goes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et accusamus quasi facere odit a voluptatum. Ducimus, repudiandae! Consequatur quisquam incidunt nulla aut rerum cum similique molestias! Quo nemo vel, quos ad dicta harum totam eos fugiat, neque nesciunt a, numquam mollitia voluptas. Quod nobis obcaecati quisquam minus praesentium laudantium soluta iste, odio, ea voluptatum eum nisi beatae porro velit debitis at consectetur ipsam. Nihil delectus adipisci accusantium quasi ipsa, consequuntur modi alias molestias dolorem vitae possimus sapiente saepe deserunt, amet corporis soluta nesciunt quos provident sed corrupti repellendus iste, consectetur quod. Laborum consequuntur ut quasi ipsam dolores, adipisci fugiat.</p>
                    <h1>The whole blog contain goes here</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et accusamus quasi facere odit a voluptatum. Ducimus, repudiandae! Consequatur quisquam incidunt nulla aut rerum cum similique molestias! Quo nemo vel, quos ad dicta harum totam eos fugiat, neque nesciunt a, numquam mollitia voluptas. Quod nobis obcaecati quisquam minus praesentium laudantium soluta iste, odio, ea voluptatum eum nisi beatae porro velit debitis at consectetur ipsam. Nihil delectus adipisci accusantium quasi ipsa, consequuntur modi alias molestias dolorem vitae possimus sapiente saepe deserunt, amet corporis soluta nesciunt quos provident sed corrupti repellendus iste, consectetur quod. Laborum consequuntur ut quasi ipsam dolores, adipisci fugiat.</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et accusamus quasi facere odit a voluptatum. Ducimus, repudiandae! Consequatur quisquam incidunt nulla aut rerum cum similique molestias! Quo nemo vel, quos ad dicta harum totam eos fugiat, neque nesciunt a, numquam mollitia voluptas. Quod nobis obcaecati quisquam minus praesentium laudantium soluta iste, odio, ea voluptatum eum nisi beatae porro velit debitis at consectetur ipsam. Nihil delectus adipisci accusantium quasi ipsa, consequuntur modi alias molestias dolorem vitae possimus sapiente saepe deserunt, amet corporis soluta nesciunt quos provident sed corrupti repellendus iste, consectetur quod. Laborum consequuntur ut quasi ipsam dolores, adipisci fugiat.</p>

                    <div className={styles.comment}>
                        <Comment/>

                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;
