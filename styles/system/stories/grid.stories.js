/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { decorateIcons } from '../../../scripts/lib-franklin.js';
import { loadPage } from '../../../scripts/scripts.js';
import style from '../../system.css';

const GutterTemplate = () => /* html */`<div>
            <h2>12 column grid</h2>
            <div class="demo-grid">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>

            <h2>12 column grid</h2>
            <div class="demo-grid">
              <div class="col span3">3 col span</div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
        </div>`;
function decorate(block) {
  console.log(block);
  const grid = document.createElement('div');
  grid.innerHTML = GutterTemplate();

  block.append(grid);
}

export const Buttons = (args, context) => FranklinTemplate(loadPage, args, context, decorate);

Buttons.parameters = {
  path: '/storybook/grid.plain.html',
  selector: 'div',
  index: 0,
};

Buttons.storyName = 'Buttons';

export default {
  title: 'Layout/Grid',
};

// export const Small = GutterTemplate.bind({});
// Small.parameters = {
//   title: 'Layout/Grid/Gutter/Small',
//   classes: 'gutter-sm',
// };

// export const Medium = GutterTemplate.bind({});
// Medium.parameters = {
//   title: 'Layout/Grid/Gutter/Medium',
//   classes: 'gutter-md',
// };

// export const Large = GutterTemplate.bind({});
// Large.parameters = {
//   title: 'Layout/Grid/Gutter/Large',
//   classes: 'gutter-lg',
// };

// export const XLarge = GutterTemplate.bind({});
// XLarge.parameters = {
//   title: 'Layout/Grid/Gutter/Extra Large',
//   classes: 'gutter-xl',
// };

// const GridTemplate = (_, context) => {
//   const { classes, colSizes } = context.parameters;
//   return /* html */`
//         <div class="section">
//           <div class="block-wrapper">
//             <div class="row visible ${classes}">
//               ${colSizes.map((size) =>
//   /* html */`
//                   <div class="${size}">
//                     <div>${size}</div>
//                   </div>`).join('')}
//             </div>
//             <div class="row visible">
//               <div class="col-6">
//                 <div>col-6</div>
//               </div>
//               <div class="col-6">
//                 <div>col-6</div>
//               </div>
//             </div>
//           </div>
//         </div>`;
// };

// export const TwoTwelve = GridTemplate.bind({});
// TwoTwelve.parameters = {
//   title: 'Layout/Grid/12 Columns',
//   colSizes: ['col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1'],
// };

// export const TwoCol = GridTemplate.bind({});
// TwoCol.parameters = {
//   title: 'Layout/Grid/6 Columns',
//   colSizes: ['col-2', 'col-2', 'col-8'],
// };

// export const EightColCenter = GridTemplate.bind({});
// EightColCenter.parameters = {
//   title: 'Layout/Grid/8 Columns Center',
//   classes: 'justify-content-center',
//   colSizes: ['col-8'],
// };
