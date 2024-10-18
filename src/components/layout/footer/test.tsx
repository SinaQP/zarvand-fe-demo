import { useEffect, useState } from 'react';
import './test.scss';
import { androidIconOrder } from './func/footerIconsCorrectOrders';
import { spawn } from 'child_process';

const TestTabbar = () => {
   // Use effect to handle DOM manipulations after component mounts
   //    useEffect(() => {
   //       // Query all 'ul' elements
   //       const uls = document.querySelectorAll<HTMLUListElement>('ul');

   //       uls.forEach((ul) => {
   //          const resetClass = ul.parentElement?.getAttribute('class') || '';
   //          const lis = ul.querySelectorAll<HTMLLIElement>('li');

   //          lis.forEach((li) => {
   //             li.addEventListener('click', (e: MouseEvent) => {
   //                e.preventDefault();
   //                e.stopPropagation();

   //                const target = e.currentTarget as HTMLLIElement;

   //                // Check if the clicked li is already active or follow, if so, return
   //                if (
   //                   target.classList.contains('active') ||
   //                   target.classList.contains('follow')
   //                ) {
   //                   return;
   //                }

   //                // Update the parent class based on the clicked li
   //                ul.parentElement?.setAttribute(
   //                   'class',
   //                   `${resetClass} ${target.getAttribute('data-where')}-style`,
   //                );

   //                // Remove active class from all list items
   //                lis.forEach((item) => clearClass(item, 'active'));

   //                // Add active class to the clicked li
   //                setClass(target, 'active');
   //             });
   //          });
   //       });

   //       // Function to remove a class
   //       function clearClass(node: HTMLElement, className: string) {
   //          node.classList.remove(className);
   //       }

   //       // Function to add a class
   //       function setClass(node: HTMLElement, className: string) {
   //          node.classList.add(className);
   //       }

   //       // Cleanup event listeners when component unmounts
   //       return () => {
   //          uls.forEach((ul) => {
   //             const lis = ul.querySelectorAll<HTMLLIElement>('li');
   //             lis.forEach((li) => li.replaceWith(li.cloneNode(true)));
   //          });
   //       };
   //    }, []);

   const [activeItem, setActiveItem] = useState(2);

   return (
      <nav className="container">
         <div className="tabbar tab-style">
            <ul className="flex-center">
               {androidIconOrder.map((item, idx) => {
                  const isActive = idx === activeItem;

                  return (
                     <li
                        className={`${item.classname} ${
                           isActive ? 'active' : ''
                        }`}
                        data-where={item.classname}
                        onClick={() => setActiveItem(idx)}
                     >
                        <item.icon
                           color={isActive ? 'black' : 'white'}
                           width={isActive ? '3.4rem' : '2.4rem'}
                           height={isActive ? '3.4rem' : '2.4rem'}
                        />
                     </li>
                  );
               })}
               <li className="follow">&nbsp;</li>
            </ul>
         </div>
      </nav>
   );
};

export default TestTabbar;
