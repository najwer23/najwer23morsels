A comprehensive collection of React components for building consistent, scalable applications.

# najwer23morsels

[![NPM Downloads](https://img.shields.io/npm/dm/najwer23morsels?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/najwer23morsels)

**Storybook:** [najwer23.github.io/najwer23morsels](https://najwer23.github.io/najwer23morsels)  
**NPM:** [najwer23morsels](https://www.npmjs.com/package/najwer23morsels)

## Prerequisites

- [mise](https://mise.jdx.dev/) manages Node.js and Yarn versions using `mise.toml`. It is the only tool you need to install manually; Node.js and Yarn are installed by mise.

## Install mise

On macOS, install mise using Homebrew:

```sh
brew install mise
```

Enable mise in Zsh by adding this line to `~/.zshrc`:

```sh
eval "$(mise activate zsh)"
```

Reload your shell configuration:

```sh
source ~/.zshrc
```

For other shells, see the [mise docs](https://mise.jdx.dev/getting-started.html).

## Installation

Clone the repository and enter the project directory:

```sh
git clone https://github.com/najwer23/najwer23morsels.git
cd najwer23morsels
```

Trust the config, install the tools specified in `mise.toml`, and install project dependencies:

```sh
mise trust      # first time only
mise install    # installs Node.js and Yarn
mise setup      # shows tool versions and runs yarn install
```

Verify the setup:

```sh
mise current    # should list node and yarn
which yarn      # should point into ~/.local/share/mise/installs/...
mise doctor     # reports problems with the setup
```

To see the newest available Yarn version:

```sh
mise latest yarn
```

## Development

Start Storybook locally:

```sh
mise start
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

## Build

Build the component library:

```sh
mise build
```

Build the static Storybook site:

```sh
mise build-storybook
```

## Deploy to GitHub Pages

Build and deploy Storybook:

```sh
mise deploy
```

## Update dependencies

Check for available dependency updates:

```sh
npx npm-check-updates
```

Update dependency version ranges in `package.json` to the latest available versions:

```sh
npx npm-check-updates -u
```

Install the updated dependencies and update `yarn.lock`:

```sh
mise setup
```

Verify the updates by building the library and Storybook:

```sh
mise build
mise build-storybook
```

Review the changes and test the library before publishing a release.

## NPM package release

Make sure you are logged in to NPM:

```sh
npm whoami
```

Create a changeset describing your changes:

```sh
yarn changeset
```

Publish the release using Changesets:

```sh
mise release
```

For manual version bumps and publishing, the following tasks are also available:

```sh
mise publish:patch
mise publish:minor
mise publish:major
```

These tasks build the library, update the package version, and publish it to NPM.

## Code formatting

Run Biome to check and automatically format the project:

```sh
mise format
```

## All tasks

List every available task:

```sh
mise tasks
```

If a task name ever collides with a built-in mise command, use `mise run <task>`. Once mise is activated, the same scripts are also available through Yarn (`yarn start`, `yarn build`, ...).

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