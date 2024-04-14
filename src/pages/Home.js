import React from 'react';
import { Cases } from '../components';
import imgOne from '../case_image_1.png';
import imgTo from '../case_image_2.png';
import imgThree from '../case_image_3.png';
import imgFo from '../case_image_4.png';
import imgFive from '../case_image_5.png';
import imgSixs from '../case_image_6.png';
export default function HomePage() {
    const items = [
        {
            title: 'Virtual cards',
            descr: 'A fintech startup offering a SaaS virtual card system to streamline small business spending',
            bg: 'case-one',
            img: imgOne,
        },
        {
            title: 'Online store',
            descr: 'Retailer of premium leather accessories looking to enhance its online presence with an advanced e-commerce platform.',
            bg: 'case-to',
            img: imgTo,
        },
        {
            title: 'Saas platform',
            descr: 'Fintech startup dedicated to revolutionizing spending management for small businesses with virtual card system.',
            bg: 'case-three',
            img: imgThree,
        },
        {
            title: 'Blog platform',
            descr: 'Consulting firm improving digital content accessibility and engagement on its platform.',
            bg: 'case-fo',
            img: imgFo,
        },
        {
            title: 'Medical research',
            descr: 'Medical research organization boosting its online presence to increase community engagement.',
            bg: 'case-five',
            img: imgFive,
        },
        {
            title: 'Investment platform',
            descr: 'Innovative startup providing a platform for easy access to pre-seed investments with educational tools',
            bg: 'case-sixs',
            img: imgSixs,
        },
    ]
    return (
        <main className="main">
            <section className="cases" style={{ height: `100vh` }}>
                <div className="cases-container" style={{ position: 'sticky' }}>
                    {/* <div className="cases-list">
                        <div className="case case-one">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Virtual cards</h1>
                                    <p className="case-description">A fintech startup offering a SaaS virtual card system to streamline small business spending</p>
                                    <div className="case-banner">
                                        <img src={require('../case_image_1.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case case-to">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Online store </h1>
                                    <p className="case-description">Retailer of premium leather accessories looking to enhance its online presence with an advanced e-commerce platform.</p>
                                    <div className="case-banner">
                                        <img src={require('../case_image_2.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case case-three">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Saas platform </h1>
                                    <p className="case-description">Fintech startup dedicated to revolutionizing spending management for small businesses with virtual card system.</p>
                                    <div className="case-banner">
                                        <img src={require('../case_image_3.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case case-fo">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Blog platform </h1>
                                    <p className="case-description">Consulting firm improving digital content accessibility and engagement on its platform.</p>
                                    <div className="case-banner">
                                        <img src={require('../case_image_4.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case case-five">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Investment <br /> platform </h1>
                                    <div className="case-banner">
                                        <img src={require('../case_image_5.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case case-sixs">
                            <div className="container">
                                <div className="case-background"></div>
                                <div className="case-content">
                                    <h1 className="case-title">Medical research </h1>
                                    <p className="case-description">Medical research organization boosting its online presence to increase community engagement.</p>
                                    <div className="case-banner">
                                        <img src={require('../case_image_6.png')} alt="case-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Cases data={items} />
                </div>
            </section>
            <section className='brands'>
                <div className='container'>
                    <h2 className='brands-title'>Brands<br />I Worked With</h2>
                    <ul className="brands-list">
                        <li className="brand-item brand-one">
                            <div className="brand-year">2021</div>
                            <div className="brand-logo">
                                <svg width="200" height="34" viewBox="0 0 200 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_951_186)">
                                        <g clip-path="url(#clip1_951_186)">
                                            <path d="M127.421 1.90208C121.453 2.30833 116.773 6.65989 115.445 13.0271C114.5 17.5427 115.171 22.3474 117.226 25.8396C119.664 29.988 123.687 32.2927 128.484 32.2849C131.679 32.2771 134.476 31.2927 136.796 29.363C140.828 26.0036 142.718 19.8708 141.64 13.6599C141.218 11.2536 140.296 9.00364 138.961 7.12864C138.312 6.22239 136.765 4.69895 135.882 4.09739C134.109 2.89426 131.851 2.07395 129.882 1.93333C128.617 1.84739 128.304 1.83958 127.421 1.90208ZM130.867 5.59739C133.703 6.33958 135.859 8.46458 137.062 11.6833C137.679 13.3318 137.968 15.0271 137.968 17.0271C137.968 18.5896 137.828 19.7927 137.492 21.0896C136.476 25.0505 134.109 27.699 130.796 28.5974C130.093 28.7849 129.921 28.8005 128.476 28.8005C127.023 28.8005 126.859 28.7849 126.132 28.5818C122.343 27.5427 119.781 24.1677 119.109 19.324C118.953 18.199 118.945 15.9568 119.101 14.863C119.812 9.90208 122.367 6.56614 126.25 5.55051C127.492 5.2302 129.539 5.24583 130.867 5.59739Z" fill="black" />
                                            <path d="M157.523 1.89599C154.273 2.12255 151.172 3.60693 149.031 5.97412C147.547 7.61474 146.359 9.83349 145.742 12.1538C144.922 15.1851 144.93 19.0054 145.75 22.0522C147.07 26.9351 150.383 30.4976 154.789 31.771C156.125 32.1616 156.789 32.2397 158.594 32.2476C160.039 32.2476 160.398 32.2241 161.156 32.0679C166.961 30.896 170.898 26.3647 171.844 19.7476C172.016 18.5991 172.031 15.8179 171.883 14.6929C171.414 11.0601 170.07 8.04443 167.922 5.80224C165.18 2.94287 161.633 1.61474 157.523 1.89599ZM160.969 5.59912C162.445 5.98193 163.891 6.84912 164.961 8.00537C168.305 11.6226 169.086 18.4663 166.727 23.4976C165.484 26.146 163.445 27.9194 160.898 28.5835C159.383 28.9741 157.203 28.9194 155.758 28.4429C153.508 27.7085 151.711 26.0835 150.523 23.7241C149.844 22.3647 149.328 20.5679 149.133 18.8569C149.016 17.8101 149.078 15.3804 149.25 14.4351C149.977 10.4194 151.813 7.58349 154.57 6.20849C155.656 5.66943 156.57 5.41943 157.773 5.3413C158.875 5.27099 160.063 5.37255 160.969 5.59912Z" fill="black" />
                                            <path d="M0.078125 17.0896V31.4255H2.14844H4.21875V23.8474V16.2693L11.1484 23.8474L18.0781 31.4255H20.6094H23.1406L22.3281 30.5505C21.8828 30.0662 18.8672 26.7693 15.625 23.2224C12.3906 19.6755 9.60156 16.6287 9.42969 16.449L9.125 16.1287L14.7266 10.3552C17.8125 7.18335 20.7422 4.17553 21.2422 3.66772L22.1484 2.75366H19.7266H17.3047L10.7813 9.4646L4.25781 16.1755L4.23438 9.4646L4.21875 2.75366H2.14844H0.078125V17.0896Z" fill="black" />
                                            <path d="M25.7812 17.0896V31.4255H36.25H46.7188V29.7458V28.0662H38.3203H29.9219V23.1833V18.3005H37.5H45.0781V16.6208V14.9412H37.5H29.9219V10.5271V6.11303L37.9922 6.09741L46.0547 6.07397L46.0781 4.40991L46.0938 2.75366H35.9375H25.7812V17.0896Z" fill="black" />
                                            <path d="M51.0938 17.0896V31.4255H53.125H55.1563V19.8865C55.1563 12.3552 55.1797 8.37085 55.2344 8.42554C55.2734 8.4646 58.8047 13.6521 63.0703 19.9412L70.8281 31.3865L73.1875 31.4099L75.5469 31.4255V17.0896V2.75366H73.5156H71.4844V14.2771C71.4844 20.613 71.4609 25.8005 71.4297 25.7927C71.3906 25.7927 67.8594 20.6052 63.5703 14.2693L55.7734 2.75366H53.4297H51.0938V17.0896Z" fill="black" />
                                            <path d="M78.125 2.80975C78.125 2.91912 90.9609 33.3019 91.0078 33.3019C91.0312 33.3019 92.3359 30.4894 93.9062 27.0441C95.4688 23.6066 96.7656 20.7785 96.7969 20.7629C96.8203 20.7473 98.1172 23.5598 99.6797 26.9973C101.242 30.4426 102.539 33.2863 102.57 33.3176C102.594 33.341 105.422 26.716 108.852 18.591C112.281 10.4582 115.188 3.57537 115.312 3.2785L115.539 2.75506L113.461 2.77069L111.383 2.79412L106.922 13.6691C104.461 19.6535 102.438 24.5598 102.422 24.5754C102.398 24.5988 101.133 21.9973 99.6094 18.8098C98.0859 15.6144 96.8203 13.0129 96.7969 13.0285C96.7734 13.0441 95.5078 15.6535 93.9844 18.8332C92.4609 22.0129 91.1953 24.5988 91.1797 24.5832C91.1562 24.5598 89.1328 19.6535 86.6797 13.6691L82.2188 2.79412L80.1719 2.77069C79.0469 2.76287 78.125 2.7785 78.125 2.80975Z" fill="black" />
                                            <path d="M91.9688 2.82397C92.1016 3.1521 96.7657 12.8318 96.797 12.8318C96.8282 12.8318 101.508 3.13647 101.625 2.82397C101.641 2.78491 99.5548 2.75366 96.797 2.75366C94.1251 2.75366 91.9532 2.78491 91.9688 2.82397Z" fill="black" />
                                            <path d="M175.703 17.0896V31.4255H181.672C188.719 31.4255 189.242 31.3865 191.211 30.7927C194.812 29.6833 197.586 26.8943 198.93 23.0193C199.547 21.238 199.844 19.3318 199.844 17.1052C199.844 14.6833 199.516 12.6912 198.789 10.7615C197.258 6.67553 194.117 3.90991 190.062 3.06616C188.641 2.7771 188.125 2.75366 181.859 2.75366H175.703V17.0896ZM188.977 6.37085C190.438 6.79272 191.539 7.42553 192.625 8.47241C194.484 10.2615 195.531 12.7146 195.797 15.9412C196.109 19.7458 194.969 23.3474 192.742 25.574C191.43 26.8865 189.992 27.6287 188.141 27.949C187.617 28.0427 186.664 28.0662 183.625 28.0662H179.766V17.0818V6.10522L184.008 6.12866L188.242 6.15991L188.977 6.37085Z" fill="black" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_951_186">
                                            <rect width="200" height="34" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_951_186">
                                            <rect width="200" height="31.7188" fill="white" transform="translate(0 1.73901)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="brand-top">
                                <div className="brand-title">Kenwood</div>
                                <div className="brand-description">Сonsumer electronics</div>
                            </div>
                        </li>
                        <li className="brand-item">
                            <div className="brand-year">2020</div>
                            <div className="brand-logo">
                                <svg width="166" height="40" viewBox="0 0 166 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_951_385)">
                                        <path d="M57.1733 0.43206C57.115 0.676041 55.04 9.3823 52.5629 19.79C50.0794 30.1977 48.0498 38.7435 48.0498 38.782C48.0498 38.8269 50.0794 38.8462 54.1127 38.8462H60.1691L60.2339 38.6022C60.2729 38.4738 62.3154 29.9024 64.7795 19.5524C67.2436 9.20253 69.2991 0.573311 69.351 0.367855L69.4353 0.00188446H63.3529H57.2706L57.1733 0.43206Z" fill="black" />
                                        <path d="M71.6076 0.173347C71.5816 0.276077 69.5066 9.00802 66.9842 19.5827L62.4062 38.8122L68.4691 38.8315C71.8021 38.8379 74.5385 38.8379 74.545 38.825C74.558 38.8186 75.1416 36.3788 75.8484 33.4189L77.1323 28.0257L77.1712 29.3419C77.223 30.9278 77.3592 31.7817 77.7937 33.0979C78.5913 35.5377 80.3745 37.6051 82.6764 38.748C83.7593 39.2873 85.0562 39.6918 86.3725 39.9037C86.8394 39.9743 87.5202 40 89.1673 40C91.5924 40 91.9815 39.9551 93.5766 39.5249C98.0184 38.3178 101.773 35.5827 103.264 32.4751C103.426 32.1413 103.556 31.8202 103.556 31.7753C103.556 31.7047 102.415 31.4864 98.842 30.87L94.1343 30.061L93.6415 30.549C92.6234 31.5698 91.4498 32.122 90.1334 32.2119C89.1348 32.2761 88.2919 32 87.7148 31.4221C87.0404 30.748 86.7551 29.6308 86.9626 28.4623L87.0339 28.0578L89.9324 28.0514C91.5211 28.0449 95.509 28.0193 98.7836 28L104.743 27.9615L104.892 27.5185C105.249 26.4783 105.437 25.13 105.437 23.6212V22.7287H107.084C107.991 22.7287 108.75 22.748 108.763 22.7737C108.783 22.8058 107.933 26.3949 106.889 30.7544C105.845 35.114 104.989 38.7223 104.983 38.7608C104.983 38.825 106.234 38.8443 111.046 38.8443H117.108L117.141 38.703C117.16 38.6196 118.023 35.0177 119.06 30.6966C120.091 26.3756 120.954 22.8122 120.973 22.7801C120.993 22.7544 121.609 22.7287 122.335 22.7287H123.671L123.625 22.9021C123.606 23.0048 122.75 26.6196 121.719 30.947L119.851 38.8122L125.914 38.8315C129.247 38.8379 131.984 38.8379 131.997 38.8315C132.003 38.8186 132.872 35.2231 133.929 30.8315C134.979 26.4398 135.861 22.825 135.881 22.7929C135.907 22.7544 136.581 22.7287 137.547 22.7287C139.065 22.7287 139.168 22.7352 139.123 22.8379C138.65 24.0385 138.163 25.8042 137.943 27.1268C137.787 28.077 137.787 30.183 137.949 31.1075C138.267 32.9438 138.786 34.3114 139.681 35.6404C140.212 36.4238 141.386 37.5923 142.19 38.1316C143.37 38.9213 144.881 39.5249 146.45 39.8395C147.215 39.9936 147.332 40 149.809 40C152.124 40 152.429 39.9872 153.006 39.8716C154.608 39.5441 156.015 39.069 157.539 38.3307C160.041 37.1236 161.903 35.6276 163.206 33.7849C163.524 33.3355 164.127 32.1926 164.211 31.878C164.25 31.7496 164.159 31.7303 162.324 31.4093C161.261 31.2231 159.127 30.8571 157.584 30.5875L154.77 30.0995L154.42 30.4912C152.993 32.0514 150.665 32.6998 149.096 31.9743C148.389 31.6469 147.838 30.9599 147.656 30.1701C147.566 29.7978 147.566 28.7897 147.656 28.3788L147.728 28.0578H156.566H165.398L165.605 27.3644C165.936 26.2215 166.001 25.6501 166.001 23.7496C166.001 22.5104 165.975 21.8812 165.903 21.4703C165.151 17.1557 161.89 13.9326 157.156 12.8411C155.055 12.3595 152.533 12.3724 150.341 12.886C148.895 13.2199 147.267 13.8812 145.99 14.6453C144.764 15.3772 143.286 16.5907 142.423 17.5795C142.177 17.862 141.97 18.0867 141.963 18.0867C141.963 18.0803 142.164 17.2199 142.423 16.1798L142.89 14.2857L140.368 14.2664C138.014 14.2536 137.852 14.2472 137.884 14.138C137.949 13.9069 140.387 3.71107 140.387 3.65329C140.387 3.62119 137.949 3.5955 134.331 3.5955C129.545 3.5955 128.268 3.61477 128.249 3.67255C128.236 3.71749 127.652 6.11878 126.958 9.0016L125.7 14.2536H124.326H122.951L122.983 14.0738C123.003 13.9775 123.58 11.5891 124.267 8.76404L125.512 3.62761L119.449 3.60834C116.116 3.60192 113.38 3.60192 113.373 3.61477C113.36 3.62119 112.796 5.9711 112.115 8.82825C111.435 11.6918 110.864 14.0803 110.845 14.138C110.812 14.2472 110.663 14.2536 108.873 14.2536H106.934L106.837 14.5875C106.785 14.7737 106.39 16.199 105.955 17.7528C105.527 19.3066 105.158 20.6228 105.138 20.6742C105.119 20.7255 105.028 20.5265 104.944 20.2247C103.705 16.0128 99.9378 13.13 94.867 12.5201C93.5896 12.366 91.4757 12.4687 90.114 12.7448C86.0807 13.573 82.6116 15.9615 80.1864 19.5698C79.6741 20.3467 78.7923 22.0032 78.494 22.7801C78.3902 23.0305 78.3059 23.236 78.293 23.2295C78.2865 23.2167 79.4991 18.0803 80.997 11.8138C82.4884 5.54735 83.7269 0.321026 83.7528 0.205456L83.7917 -3.8147e-06H77.7223H71.653L71.6076 0.173347ZM93.5702 20.3531C94.4455 20.61 95.0162 21.2969 95.1199 22.2279C95.1523 22.4847 95.1588 22.7929 95.1394 22.9085L95.1134 23.114H92.0788C88.9792 23.114 88.4475 23.0883 88.4475 22.9534C88.4475 22.9149 88.5383 22.6902 88.655 22.4655C88.9533 21.8684 89.7509 21.0979 90.4252 20.7576C91.56 20.1798 92.5391 20.0578 93.5702 20.3531ZM153.849 20.2953C154.42 20.3981 154.86 20.6356 155.23 21.0273C155.639 21.4767 155.781 21.8748 155.788 22.6003V23.1461L152.435 23.1653C149.77 23.1782 149.076 23.1653 149.076 23.1011C149.076 22.9278 149.459 22.2279 149.744 21.8876C150.698 20.7319 152.474 20.0449 153.849 20.2953Z" fill="black" />
                                        <path d="M20.7506 2.48368C19.136 2.63778 18.105 2.80471 16.9573 3.08721C10.22 4.76939 4.73422 9.26378 2.02375 15.344C0.72039 18.2654 0.0460153 21.3793 0.0395309 24.5254C0.0330466 26.1177 0.091406 26.7084 0.370234 28.0246C0.98625 30.9524 2.60734 33.6811 4.87687 35.6073C7.35391 37.7004 10.4016 38.9652 14.169 39.466C15.2065 39.6009 18.3125 39.6201 19.4538 39.4981C23.3379 39.0808 26.5412 38.1819 29.6926 36.6281C30.6782 36.1402 32.1048 35.3248 32.3058 35.1322C32.3382 35.1001 35.0357 23.9026 36.3455 18.3424L36.4298 17.9765H27.3388H18.2477L17.262 22.0663C16.7173 24.32 16.2764 26.1819 16.2764 26.2076C16.2764 26.2397 17.8002 26.259 19.6548 26.259H23.0396L23.0007 26.4965C22.9423 26.8368 22.6181 27.4532 22.2939 27.8448C21.211 29.1354 19.0647 29.9508 17.2685 29.7389C14.9406 29.4692 13.4363 27.9604 13.0018 25.4628C12.7813 24.1915 12.9305 21.9829 13.326 20.6474C14.4738 16.7437 18.0661 13.5848 21.5936 13.3729C23.4676 13.2638 25.0563 14.214 25.7112 15.8448C25.7955 16.0439 25.8538 16.1081 25.9316 16.0888C25.99 16.0696 28.6227 15.4147 31.787 14.6314L37.5322 13.2124L37.383 12.6538C35.8268 6.97164 31.0024 3.22204 24.3689 2.53505C23.5195 2.45158 21.412 2.41948 20.7506 2.48368Z" fill="black" />
                                        <path d="M42.052 3.73572C41.7083 5.17392 40.0159 12.5511 40.0353 12.564C40.0677 12.5961 52.8744 9.43074 52.9327 9.37938C52.9587 9.35369 53.257 8.09527 53.5942 6.5736C53.9378 5.05835 54.2296 3.76782 54.2491 3.70361C54.2815 3.60089 53.9638 3.59446 48.1862 3.59446H42.0844L42.052 3.73572Z" fill="black" />
                                        <path d="M39.5552 14.136C39.5552 14.1488 38.2323 19.7026 36.6113 26.4827L33.6738 38.8102L39.7367 38.8294C43.0697 38.8358 45.8061 38.8358 45.8191 38.8294C45.845 38.8037 51.6809 14.2837 51.6809 14.2002C51.6809 14.1424 50.1766 14.1231 45.618 14.1231C42.2851 14.1231 39.5552 14.1296 39.5552 14.136Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_951_385">
                                            <rect width="166" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="brand-top">
                                <div className="brand-title">Gillette</div>
                                <div className="brand-description">Shaving Products</div>
                            </div>
                        </li>
                        <li className="brand-item">
                            <div className="brand-year">2021</div>
                            <div className="brand-logo">
                                <svg width="230" height="40" viewBox="0 0 230 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_951_2407)">
                                        <path d="M92.6897 2.25295C91.0797 2.73595 89.9297 4.29995 89.9297 6.02495C89.9297 8.14095 91.3557 9.61295 93.5867 9.77395C96.7837 10.0039 98.8077 7.28995 97.5657 4.46095C96.7837 2.68995 94.6217 1.70095 92.6897 2.25295Z" fill="black" />
                                        <path d="M102.81 20.1697V37.8797H105.915H109.02V36.4307L109.043 35.0047L109.779 35.8327C111.872 38.2247 115.506 39.1217 119.347 38.2247C123.487 37.2357 126.73 33.9007 127.765 29.5537C128.524 26.3337 127.995 21.8487 126.569 19.1807C125.626 17.4557 123.786 15.6847 122.107 14.8797C120.129 13.9597 118.519 13.6607 116.058 13.7757C113.505 13.9137 111.78 14.5347 110.308 15.8227L109.25 16.7657V9.61272V2.45972H106.03H102.81V20.1697ZM117.921 19.8477C120.06 20.7447 121.233 22.6307 121.394 25.3677C121.578 28.7717 120.474 31.0947 118.082 32.2677C115.621 33.4637 112.24 32.8427 110.745 30.8877C108.675 28.1737 108.629 23.9417 110.653 21.4807C112.263 19.5257 115.437 18.8127 117.921 19.8477Z" fill="black" />
                                        <path d="M159.62 20.1699V37.8799H162.955H166.29V20.1699V2.45988H162.955H159.62V20.1699Z" fill="black" />
                                        <path d="M172.04 20.1699V37.8799H175.375H178.71V20.1699V2.45988H175.375H172.04V20.1699Z" fill="black" />
                                        <path d="M56.9944 9.98088L56.9254 14.3049L54.6944 14.3739L52.4404 14.4429V17.1799V19.9399H54.7404H57.0404V28.9099V37.8799H60.2604H63.4804V28.9099V19.9399H65.7804H68.0804V17.1799V14.4429L65.8494 14.3739L63.5954 14.3049L63.5264 9.98088L63.4804 5.67988H60.2604H57.0404L56.9944 9.98088Z" fill="black" />
                                        <path d="M213.44 10.0499V14.4199H211.255H209.07V17.1799V19.9399H211.255H213.44V28.9099V37.8799H216.775H220.11V28.9099V19.9399H222.295H224.48V17.1799V14.4199H222.295H220.11V10.0499V5.67988H216.775H213.44V10.0499Z" fill="black" />
                                        <path d="M192.395 13.7298C187.772 14.6728 184.138 18.0768 182.965 22.6308C182.505 24.3558 182.528 27.8978 182.988 29.6918C184.069 33.8778 187.657 37.3048 192.05 38.3628C194.925 39.0528 198.697 38.5928 201.342 37.2588C202.837 36.4998 204.93 34.4988 205.689 33.0728L206.31 31.9688L203.55 31.2098L200.79 30.4738L200.33 31.0028C200.1 31.3018 199.893 31.6238 199.87 31.6928C199.87 31.7618 199.318 32.1298 198.674 32.4978C197.616 33.0728 197.202 33.1418 195.615 33.1648C192.142 33.1648 189.934 31.5318 189.198 28.3808L189.06 27.7598H197.892H206.724L206.862 27.2308C207.299 25.6208 206.632 21.6188 205.597 19.5028C204.148 16.5818 201.48 14.6038 197.892 13.8448C196.19 13.4768 193.89 13.4308 192.395 13.7298ZM197.57 19.2728C199.203 20.0088 199.962 20.9058 200.353 22.6308L200.514 23.3898H194.902H189.29L189.428 22.7458C189.819 21.1818 190.831 20.0318 192.51 19.2728C193.913 18.6288 196.167 18.6288 197.57 19.2728Z" fill="black" />
                                        <path d="M10.994 14.0519C9.568 14.4659 8.004 15.3859 7.291 16.2599C6.969 16.6279 6.647 16.9499 6.578 16.9499C6.509 16.9499 6.44 16.3749 6.44 15.6849V14.4199H3.22H0V26.1499V37.8799H3.335H6.67V30.6809C6.67 26.1269 6.762 23.1599 6.923 22.5849C7.314 21.2049 8.809 19.8249 10.235 19.5259C12.443 19.0659 14.444 19.8479 15.41 21.5729L15.985 22.5849L16.054 30.2209L16.123 37.8799H19.343H22.563L22.494 28.9789C22.425 20.6529 22.402 19.9859 21.965 18.9739C20.953 16.6049 19.366 15.0179 17.204 14.2589C15.87 13.7759 12.374 13.6609 10.994 14.0519Z" fill="black" />
                                        <path d="M26.4958 23.0906C26.5648 31.5316 26.5878 31.8306 27.0938 33.0956C27.7148 34.6136 29.3018 36.4996 30.6818 37.3046C32.1538 38.1556 34.5458 38.6386 36.5698 38.4776C38.8468 38.3166 40.2268 37.8106 41.4688 36.7066C42.0438 36.2236 42.5728 35.8096 42.6418 35.8096C42.7108 35.8096 42.7798 36.2696 42.7798 36.8446V37.8796H45.8848H48.9898V26.1496V14.4195H45.6548H42.3198V21.7796C42.3198 29.6916 42.2508 30.1516 41.1008 31.3936C39.6058 33.0036 36.5698 33.2106 34.6608 31.8536C34.3158 31.6006 33.8098 30.9796 33.5108 30.4506C33.0278 29.5076 33.0048 29.2316 32.9358 21.9405L32.8668 14.4195H29.6468H26.4268L26.4958 23.0906Z" fill="black" />
                                        <path d="M72.2197 26.1499V37.8799H75.4397H78.6597V32.0609C78.6597 27.5529 78.7287 25.9429 79.0047 24.8849C79.8097 21.8489 81.5577 20.6069 85.2607 20.4459L87.3997 20.3539V17.3639V14.3739L84.9387 14.4659C82.7077 14.5349 82.3167 14.6269 81.2127 15.2249C80.5227 15.6159 79.6717 16.3289 79.3037 16.8119L78.6597 17.7089V16.0759V14.4199H75.4397H72.2197V26.1499Z" fill="black" />
                                        <path d="M90.6201 26.1499V37.8799H93.9551H97.2901V26.1499V14.4199H93.9551H90.6201V26.1499Z" fill="black" />
                                        <path d="M131.376 23.2288L131.445 32.0148L132.204 33.5558C133.147 35.4648 134.964 37.1898 136.758 37.8568C140.185 39.1448 144.486 38.5238 146.694 36.4308L147.43 35.7178V36.7988V37.8798H150.65H153.87V26.1498V14.4198H150.535H147.2V21.7798C147.2 29.8068 147.154 30.1748 145.866 31.5088C145.084 32.3138 143.106 32.9118 141.841 32.7278C140.369 32.4978 139.104 31.6698 138.46 30.5198L137.885 29.4848L137.816 21.9408L137.747 14.4198H134.527H131.307L131.376 23.2288Z" fill="black" />
                                        <path d="M225.745 32.7047C224.434 33.1647 223.79 34.0617 223.79 35.4187C223.79 37.4657 224.94 38.6387 226.941 38.6387C230.621 38.6387 230.989 33.1647 227.355 32.4977C226.987 32.4287 226.251 32.5207 225.745 32.7047ZM228.252 33.2567C230 34.4297 229.954 36.8907 228.16 37.9717C226.412 38.9837 224.25 37.6727 224.25 35.5797C224.25 33.4177 226.527 32.1297 228.252 33.2567Z" fill="black" />
                                        <path d="M225.86 35.5797C225.86 36.4997 225.952 37.1897 226.09 37.1897C226.228 37.1897 226.32 36.9137 226.32 36.5457L226.343 35.9247L226.849 36.5457C227.47 37.3047 228.091 37.4427 227.7 36.7297C227.516 36.3847 227.539 36.1317 227.838 35.6947C228.183 35.1657 228.183 35.0737 227.838 34.5447C227.562 34.1077 227.263 33.9697 226.665 33.9697H225.86V35.5797ZM227.355 35.1197C227.355 35.3037 227.125 35.4877 226.849 35.5337C226.435 35.6027 226.32 35.4877 226.32 35.1197C226.32 34.7517 226.435 34.6367 226.849 34.7057C227.125 34.7517 227.355 34.9357 227.355 35.1197Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_951_2407">
                                            <rect width="230" height="36.8" fill="white" transform="translate(0 2)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className="brand-top">
                                <div className="brand-title">Nutribullet</div>
                                <div className="brand-description">Kitchen Appliances</div>
                            </div>
                        </li>
                        <li className="brand-item">
                            <div className="brand-year">2021</div>
                            <div className="brand-logo">
                                <svg width="168" height="42" viewBox="0 0 168 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4757 1.31209C6.99492 1.93267 2.63775 5.92403 1.45537 11.4113L1.27246 12.2475V21.001V29.7545L1.45537 30.5907C2.01063 33.1841 3.15382 35.2876 5.00251 37.1232C7.00799 39.1221 9.66018 40.3764 12.5541 40.6899C13.449 40.7879 153.78 40.7879 154.675 40.6899C157.569 40.3764 160.214 39.1287 162.226 37.1232C164.075 35.2876 165.218 33.1841 165.774 30.5907L165.957 29.7545V21.001V12.2475L165.774 11.4113C165.218 8.83752 164.075 6.72752 162.259 4.90496C160.234 2.87989 157.588 1.62565 154.675 1.31209C153.898 1.22717 13.2269 1.22717 12.4757 1.31209ZM154.753 2.02413C156.236 2.21357 157.373 2.5598 158.738 3.2457C159.836 3.79443 160.613 4.33663 161.469 5.13359C163.526 7.04762 164.807 9.50383 165.218 12.3259C165.342 13.162 165.342 28.84 165.218 29.6762C164.434 35.0001 160.476 39.0437 155.178 39.9256C154.401 40.0563 12.8284 40.0563 12.0511 39.9256C9.63405 39.5206 7.48486 38.4754 5.76028 36.8684C3.52617 34.7846 2.2262 32.1193 1.95837 29.0686C1.87345 28.0692 1.87345 13.9329 1.95837 12.9334C2.45484 7.24359 6.75322 2.75577 12.4104 2.03066C13.0636 1.94574 154.08 1.94574 154.753 2.02413Z" fill="black" />
                                    <path d="M15.3963 14.0813C14.3053 14.3426 13.2406 15.1984 12.7506 16.2044C12.2737 17.1777 12.2803 17.0732 12.2803 21.3977C12.2803 23.9715 12.3064 25.3303 12.3521 25.4544C12.4501 25.7157 12.7898 26.0554 13.0968 26.1991C13.6913 26.4735 14.4817 26.2383 14.8345 25.683L15.0239 25.3825V23.8605V22.3319L22.0986 22.3515C28.7356 22.3711 29.1798 22.3776 29.4281 22.4886C30.0878 22.7891 30.1924 23.0374 30.2381 24.4419C30.2773 25.5197 30.2838 25.5328 30.4733 25.8137C30.6954 26.1272 31.2506 26.4539 31.5772 26.4539C32.1652 26.4539 32.7727 26.0227 32.9164 25.5066C33.0079 25.1735 33.0079 23.6841 32.9164 23.1223C32.8184 22.5017 32.5245 21.9464 32.1129 21.5741L31.7602 21.2671L32.0345 20.9535C32.4003 20.5354 32.7074 20.0128 32.9099 19.4772C33.1255 18.8958 33.1842 17.8114 33.0275 17.1516C32.8903 16.5702 32.4853 15.7928 32.0737 15.329C31.6622 14.8718 30.9632 14.4014 30.3557 14.1793L29.8853 14.0095L22.8302 13.9964C16.9183 13.9899 15.7164 14.0029 15.3963 14.0813ZM29.1472 16.5245C29.2778 16.5637 29.526 16.6878 29.6959 16.8054C30.6104 17.4194 30.6104 18.8958 29.6959 19.5098C29.526 19.6274 29.2778 19.7515 29.1472 19.7907C28.9904 19.8299 26.4884 19.856 21.968 19.856H15.0239V18.8762C15.0239 18.0596 15.0435 17.844 15.1546 17.5501C15.3114 17.1255 15.6772 16.7596 16.1083 16.5898C16.4153 16.4722 16.6701 16.4657 22.6669 16.4657C26.7236 16.4591 28.9904 16.4853 29.1472 16.5245Z" fill="black" />
                                    <path d="M68.8771 15.4738C68.5439 15.5587 68.2042 15.8004 68.0148 16.0879L67.8384 16.3557L67.8058 19.622C67.7731 22.8425 67.7731 22.9013 67.6294 23.1234C67.3419 23.5872 67.3877 23.5806 64.5787 23.5806C62.1943 23.5806 62.0441 23.5741 61.6979 23.4435C60.9466 23.1626 60.3783 22.6138 60.0844 21.8822C59.9406 21.536 59.9341 21.4184 59.9014 19.0079C59.8688 16.715 59.8557 16.4733 59.7447 16.2447C59.5291 15.8135 58.9673 15.4804 58.4447 15.4804C58.0136 15.4804 57.5105 15.7613 57.2754 16.1271L57.0859 16.4276L57.1055 19.2039C57.1317 21.9018 57.1317 21.9932 57.2819 22.4375C57.7653 23.9007 58.7583 25.0635 60.0648 25.6972C61.1295 26.2132 61.7632 26.2786 65.2058 26.2459C68.1193 26.2132 68.1454 26.2067 68.8771 25.769C69.2168 25.5665 69.2756 25.5469 69.367 25.6318C69.5695 25.8148 70.262 26.1153 70.6539 26.1936C70.9413 26.2524 71.8624 26.2655 73.9528 26.2459C76.6834 26.2132 76.8859 26.2067 77.3758 26.0695C79.2507 25.56 80.6878 24.1228 81.2104 22.2415C81.3476 21.745 81.3541 21.5948 81.3541 19.1059C81.3607 16.6823 81.3541 16.4798 81.2431 16.2708C80.8642 15.5849 80.0542 15.304 79.3683 15.6175C79.0024 15.7809 78.8653 15.905 78.6889 16.2316C78.5582 16.4798 78.5517 16.5909 78.519 19.0406L78.4864 21.5882L78.3035 21.9737C77.9638 22.7053 77.4738 23.1691 76.7487 23.4369C76.409 23.561 76.2196 23.5741 73.8744 23.5937C71.4639 23.6133 71.3594 23.6068 71.1504 23.4827C71.0328 23.4108 70.8695 23.2475 70.7911 23.1234C70.6474 22.9013 70.6474 22.8425 70.6147 19.6154L70.5821 16.3426L70.3861 16.0617C70.066 15.611 69.3866 15.3432 68.8771 15.4738Z" fill="black" />
                                    <path d="M40.011 15.5883C39.1553 15.7124 38.0839 16.1892 37.4176 16.7445C36.8297 17.2279 36.3855 17.8028 36.0327 18.5148C35.582 19.4163 35.5036 19.7821 35.5101 20.9318C35.5101 21.8529 35.5232 21.9509 35.7192 22.5323C36.3071 24.2961 37.6201 25.5568 39.4231 26.0729L39.9457 26.2231H45.0737H50.2017L50.7243 26.0729C52.5273 25.5503 53.7815 24.3614 54.4086 22.578C54.6307 21.9313 54.6373 21.8856 54.6373 20.9318C54.6438 19.7886 54.5654 19.4163 54.1212 18.5148C53.5921 17.4369 52.782 16.6334 51.7042 16.0978C50.5871 15.5491 50.966 15.5817 45.2697 15.5687C42.4868 15.5621 40.1221 15.5752 40.011 15.5883ZM49.5158 18.2274C50.365 18.3646 51.0966 18.9329 51.4951 19.7756C51.6911 20.1806 51.7042 20.2655 51.7042 20.8992C51.7042 21.5328 51.6911 21.6177 51.4951 22.0228C51.2208 22.6107 50.7766 23.068 50.2409 23.3358L49.8097 23.5448H45.0737H40.3376L39.9065 23.3358C39.3643 23.068 38.9266 22.6107 38.6523 22.0228C38.2668 21.1931 38.3518 20.1153 38.8678 19.364C39.2728 18.7761 39.9392 18.3384 40.5793 18.2274C41.0889 18.1425 48.9997 18.1425 49.5158 18.2274Z" fill="black" />
                                    <path d="M88.1738 15.607C87.612 15.705 87.1156 15.8813 86.5211 16.1818C86.0377 16.4301 85.8221 16.5934 85.3126 17.1095C83.8754 18.5466 83.3986 20.3496 83.9146 22.3485C84.2805 23.7857 85.4236 25.1183 86.8347 25.765C87.8668 26.2353 87.612 26.2157 93.0862 26.2419C96.5158 26.2549 98.0901 26.2419 98.26 26.1896C98.9524 25.9871 99.3574 25.1379 99.0569 24.5369C98.9198 24.2625 98.7173 24.047 98.4756 23.9163C98.2992 23.8183 97.77 23.7987 93.2757 23.7726L88.2783 23.7399L87.7884 23.4982C87.4487 23.3284 87.1809 23.1324 86.9261 22.8646C86.7236 22.649 86.5538 22.4465 86.5538 22.4073C86.5538 22.3616 88.3829 22.3354 92.224 22.3158C97.4238 22.2962 97.9203 22.2897 98.273 22.1787C99.8474 21.7083 100.729 20.5651 100.729 19.0039C100.729 17.4818 99.7951 16.2472 98.2469 15.718C97.8288 15.5743 97.7831 15.5743 93.1516 15.5678C90.5843 15.5613 88.3437 15.5808 88.1738 15.607ZM97.6329 18.1024C97.9007 18.2526 98.162 18.5597 98.2143 18.8014C98.273 19.0692 98.0575 19.533 97.7831 19.729L97.561 19.8858L91.93 19.9054C88.8271 19.9119 86.2925 19.8988 86.2925 19.8727C86.2925 19.84 86.3839 19.6637 86.495 19.4677C86.9326 18.7034 87.7557 18.1351 88.5788 18.0305C88.814 17.9979 90.8979 17.9783 93.2169 17.9848C97.0645 17.9913 97.45 17.9979 97.6329 18.1024Z" fill="black" />
                                    <path d="M107.328 15.6454C105.473 16.0243 103.938 17.3373 103.337 19.0488C103.049 19.8785 103.017 20.2574 103.017 22.8246C103.017 25.2416 103.017 25.2612 103.167 25.5487C103.578 26.3326 104.65 26.5481 105.329 25.9864C105.826 25.5813 105.826 25.5617 105.826 23.0402C105.826 21.786 105.858 20.6362 105.891 20.4403C106.106 19.3101 106.975 18.4348 108.079 18.2323C108.576 18.1408 114.56 18.1343 115.036 18.2258C115.886 18.3891 116.643 18.9574 117.016 19.7217L117.225 20.1528L117.257 22.7332C117.29 25.5552 117.277 25.4376 117.708 25.8884C118.263 26.4698 119.224 26.4175 119.792 25.7773C120.132 25.3919 120.145 25.2286 120.119 22.5437C120.093 20.2639 120.079 20.0483 119.949 19.5649C119.674 18.585 119.25 17.8338 118.557 17.1348C117.78 16.3509 116.833 15.8414 115.775 15.6389C115.095 15.5082 107.968 15.5148 107.328 15.6454Z" fill="black" />
                                    <path d="M121.529 15.6722C121.189 15.829 120.882 16.2013 120.791 16.5737C120.66 17.0767 120.895 17.6254 121.385 17.9782C121.601 18.1284 121.601 18.1284 124.377 18.1611C127.428 18.1937 127.356 18.1872 127.624 18.5987C127.728 18.7621 127.741 19.0691 127.774 22.0806C127.813 25.7845 127.787 25.6277 128.303 25.9935C128.93 26.4508 129.74 26.3789 130.269 25.8237C130.648 25.4252 130.648 25.4383 130.648 22.0087C130.648 18.4485 130.635 18.5334 131.131 18.2917C131.393 18.1676 131.523 18.1611 134.006 18.1611C136.919 18.1611 136.867 18.1676 137.272 17.6907C137.559 17.3576 137.664 16.9526 137.566 16.5671C137.475 16.2013 137.161 15.8224 136.828 15.6722C136.573 15.5546 136.22 15.5481 129.178 15.5481C122.136 15.5481 121.783 15.5546 121.529 15.6722Z" fill="black" />
                                    <path d="M140.481 15.6362C140.233 15.7473 139.893 16.1065 139.801 16.3482C139.703 16.603 139.71 17.008 139.821 17.2628C139.932 17.5437 140.317 17.8703 140.624 17.9552C140.788 18.001 142.636 18.0271 146.033 18.0271C150.913 18.0271 151.207 18.0336 151.462 18.1512C151.893 18.3472 152.272 18.9024 152.272 19.3467C152.272 19.4512 151.9 19.4577 146.543 19.4838C140.2 19.5034 140.533 19.4838 139.645 19.9346C138.345 20.5878 137.678 22.1752 138.064 23.6777C138.39 24.9254 139.507 25.9053 140.899 26.1666C141.343 26.2515 142.14 26.2646 146.21 26.2384C151.403 26.2123 151.325 26.2188 152.383 25.84C153.343 25.4872 154.114 24.8274 154.519 24.0174C154.918 23.2074 154.963 22.8415 154.937 20.6401C154.911 18.8633 154.898 18.6803 154.767 18.2819C154.31 16.9166 153.128 15.9367 151.566 15.6362C150.874 15.5056 140.775 15.5056 140.481 15.6362ZM152.318 22.2144C152.246 22.8023 151.795 23.3837 151.201 23.6516C150.946 23.7692 150.658 23.7757 146.079 23.7757C142.617 23.7757 141.18 23.7561 141.082 23.7038C140.814 23.5666 140.579 23.2923 140.507 23.044C140.396 22.626 140.709 22.1034 141.167 21.927C141.219 21.9074 143.76 21.8878 146.811 21.8878L152.357 21.8813L152.318 22.2144Z" fill="black" />
                                </svg>
                            </div>
                            <div className="brand-top">
                                <div className="brand-title">Rowenta</div>
                                <div className="brand-description">Household Appliances</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}