# ContainerCard

This component is able to be used instead of [ fieldset ] tag in react applications.

# Created by Saeed Tarin at Zaravand co.

## Usage

just in 3 steps:

- import component

  `import ContainerCard from '../../components/containerCard';`

- call it in your JSX or tsx code

  `<ContainerCard />`

- pass [element] to it

  `<ContainerCard> You Pass Your Component Here </ContainerCard>`

## APIs

- **className** : string (_optional_)

  this attribute will contains all of your custome style or some default class name like : 'transparent' for container

- **titleClassName** : string (_optional_)

  this attribute will contains all of your custome style or some default class name like : 'transparent' for title

- **title** : string (_optional_)

  get the title name that is used in legend tag

- **isInner** : boolean (_optional_)

  this attribute used for some container inner the other container to get default style

## Usage Example

### `use ContainerCard component for outer container without title:`

`<ContainerCard> You Pass Your Component Here </ContainerCard>`

## `use ContainerCard component for outer container with title:`

`<ContainerCard> You Pass Your Component Here </ContainerCard>`

## `use ContainerCard component for inner container without title:`

`
<ContainerCard
isInner={true}

> </ContainerCard>`

## `use ContainerCard component for inner container with title:`

`
<ContainerCard
title="عنوان در صورت وجود"
isInner={true}

> </ContainerCard>`

## `use ContainerCard component for outer container with className & title:`

`  
<ContainerCard
title="عنوان در صورت وجود"
className="transparent"
isInner={true}

> </ContainerCard>`

## `use ContainerCard with inner ContainerCard as child:`

`  
<ContainerCard
title="مشخصات عمومی ملک"
className="fullWidth"

>

    <ContainerCard
        title="شماره شناسنامه ملک"
        isInner={true}
    ></ContainerCard>

</ContainerCard>`
