# Layout

This component is able to be used for your layout in react applications.

# Created by Saeed Tarin at Zaravand co.

## Usage

just in 3 steps:

- import component

     `import Layout from '../../components/layout';`

- call it in your JSX or tsx code

     `<Layout />`

- pass [element] to it

                `<Layout>
               You Pass Your main content Component Here

     </Layout>`

## APIs

- **header** : ReactNode (_optional_)

     this attribute will contains your header for your page

- **rightSideBar** : ReactNode (_optional_)

     this attribute will contains right side bar for your page

- **leftSideBar** : ReactNode (_optional_)

     this attribute will contains left side bar for your page

- **children** : any (_optional_)

     this attribute used for pass main content for your page

## Usage Example

### `use Layout component with only main:`

`<Layout>
your main custome component write here
</Layout>`

## `use Layout  component with header and main :`

`<Layout header={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`

## `use Layout  component with right sidebar and main :`

`<Layout rightSideBar={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`

## `use Layout  component with left sidebar and main :`

`<Layout leftSideBar={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`

## `use Layout  component with right sidebar, main  and header:`

`<Layout rightSideBar={`your custome (jsx/tsx) element`} header={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`

## `use Layout  component with left sidebar, main  and header:`

`<Layout leftSideBar={`your custome (jsx/tsx) element`} header={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`

## `use Layout  component with left and right sidebar, main  and header:`

`<Layout rightSideBar={`your custome (jsx/tsx) element`} leftSideBar={`your custome (jsx/tsx) element`} header={`your custome (jsx/tsx) element`}>
your custome main content write here
</Layout>`
