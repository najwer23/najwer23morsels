A comprehensive collection of React components for building consistent, scalable applications.

# najwer23morsels

[![NPM Downloads](https://img.shields.io/npm/dm/najwer23morsels?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/najwer23morsels)

**Storybook:** [najwer23.github.io/najwer23morsels](https://najwer23.github.io/najwer23morsels)  
**NPM:** [najwer23morsels](https://www.npmjs.com/package/najwer23morsels)

## Prerequisites

- [mise](https://mise.jdx.dev/) — manages Node.js and Yarn versions using `mise.toml`.
- [Node.js](https://nodejs.org/) — the version configured in `mise.toml`.
- [Yarn](https://yarnpkg.com/) — the version configured in `mise.toml`.
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) — checks for and updates dependency versions.

## Install mise

On macOS, install mise using Homebrew:

```sh
brew install mise
```

Enable mise in Zsh by adding the following line to `~/.zshrc`:

```sh
eval "$(mise activate zsh)"
```

Reload your shell configuration:

```sh
source ~/.zshrc
```

## Installation

Clone the repository and enter the project directory:

```sh
git clone https://github.com/najwer23/najwer23morsels.git
cd najwer23morsels
```

Install the configured tool versions and project dependencies:

```sh
yarn setup
```

The setup script displays the latest available Yarn version, shows the currently configured Yarn version, installs the tools specified in `mise.toml`, and installs project dependencies.

Alternatively, run the steps individually:

```sh
mise install
yarn install
```

## Development

Start Storybook locally:

```sh
yarn start
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

## Build

Build the component library:

```sh
yarn build
```

Build the static Storybook site:

```sh
yarn build-storybook
```

## Deploy to GitHub Pages

Build and deploy Storybook:

```sh
yarn deploy
```

## Update dependencies

Check for available dependency updates:

```sh
ncu
```

Update dependency version ranges in `package.json` to the latest available versions:

```sh
ncu -u
```

Install the updated dependencies and update `yarn.lock`:

```sh
yarn install
```

Verify the updates by building the library and Storybook:

```sh
yarn build
yarn build-storybook
```

Review the changes and test the library before publishing a release.

## NPM package release

Create a changeset describing your changes:

```sh
yarn changeset
```

Publish the release using Changesets:

```sh
yarn release
```

For manual version bumps and publishing, the following scripts are also available:

```sh
yarn publish:patch
yarn publish:minor
yarn publish:major
```

These scripts build the library, update the package version, and publish it to NPM.

## Code formatting

Run Biome to check and automatically format the project:

```sh
yarn format
```

## Git history

View the Git commit history:

```sh
git log --pretty=oneline
```

## Let's connect!

- **Portfolio:** [najwer23.github.io](https://najwer23.github.io)
- **Résumé:** [najwer23.github.io/resume](https://najwer23.github.io/resume)
- **X:** [@najwer23](https://twitter.com/najwer23)
- **LinkedIn:** [najwer23](https://www.linkedin.com/in/najwer23)
- **LeetCode:** [najwer23](https://leetcode.com/najwer23)
- **NPM:** [@najwer23](https://www.npmjs.com/~najwer23)
