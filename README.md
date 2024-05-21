Reproduction of module federation issue with Next SSR and two react remotes.

I have made the most simple reproduction I could. Quick instruction for repo:

- In remote folder: npm i && npm start
- In remote2 folder: npm i && npm start
- In host folder: npm i && npm run dev

When accessing the host at http://localhost:3000 you should get the error: `Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`

Remote2 is using components from the first remote, and the host is pulling in components from both remote and remote2.

When removing remote2 from the equation, it works as expected.
