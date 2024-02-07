import * as Scroll from 'react-scroll';
export const scrollToElement = (elementName:string) => {
        const element = document.querySelector(`#${elementName}`);
        if (element) {
            Scroll.animateScroll.scrollTo((element as HTMLElement).offsetTop);
        } else {
            console.warn(`Element with ID ${elementName} not found.`);
        }
    };
