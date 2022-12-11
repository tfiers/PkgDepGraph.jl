# PkgGraph.jl &nbsp; [![][docbadge]][docs]

<!-- The following part of this ReadMe will be re-used in the docs homepage (for DRY purposes) -->
<!-- for-inclusion-in-docs: -->

Tiny tool to visualize the dependency graph of a Julia package.

### Example

```julia
julia> using PkgGraph

julia> PkgGraph.open(:Unitful)
```
This will open the browser to [this url][dotlink], which renders the following image:

<!-- Generated with `PkgGraph.create("Unitful", dir="docs", fmt=:png)` -->
<img src="docs/img/Unitful-deps.svg"
     width=680
     alt="Dependency graph of Unitful, rendered with Graphviz dot">


<details>
  
  The given package (here: [Unitful][unitful]) must be installed in the currently active project for this to work.

  Note that `PkgGraph` does not have to be installed in the same project however:\
  you can switch projects _after_ `PkgGraph` has been imported (using `] activate`).

  Also see [Installation](#-installation) for an even easier way, without having to switch projects.

</details>

[unitful]: https://github.com/PainterQubits/Unitful.jl
[dotlink]: https://dreampuf.github.io/GraphvizOnline/#digraph%20%7B%0A%20%20%20%20node%20%5Bfontname%20%3D%20%22sans-serif%22%5D%0A%20%20%20%20edge%20%5Barrowsize%20%3D%200.88%5D%0A%20%20%20%20Unitful%20-%3E%20ConstructionBase%0A%20%20%20%20ConstructionBase%20-%3E%20LinearAlgebra%0A%20%20%20%20LinearAlgebra%20-%3E%20Libdl%0A%20%20%20%20LinearAlgebra%20-%3E%20libblastrampoline_jll%0A%20%20%20%20libblastrampoline_jll%20-%3E%20Artifacts%0A%20%20%20%20libblastrampoline_jll%20-%3E%20Libdl%0A%20%20%20%20libblastrampoline_jll%20-%3E%20OpenBLAS_jll%0A%20%20%20%20OpenBLAS_jll%20-%3E%20Artifacts%0A%20%20%20%20OpenBLAS_jll%20-%3E%20CompilerSupportLibraries_jll%0A%20%20%20%20CompilerSupportLibraries_jll%20-%3E%20Artifacts%0A%20%20%20%20CompilerSupportLibraries_jll%20-%3E%20Libdl%0A%20%20%20%20OpenBLAS_jll%20-%3E%20Libdl%0A%20%20%20%20Unitful%20-%3E%20Dates%0A%20%20%20%20Dates%20-%3E%20Printf%0A%20%20%20%20Printf%20-%3E%20Unicode%0A%20%20%20%20Unitful%20-%3E%20LinearAlgebra%0A%20%20%20%20Unitful%20-%3E%20Random%0A%20%20%20%20Random%20-%3E%20SHA%0A%20%20%20%20Random%20-%3E%20Serialization%0A%7D%0A


## 💻 Local rendering

If you are offline and have [Graphviz `dot`](https://graphviz.org) installed on your PATH, you can use
```julia
julia> PkgGraph.create(:Unitful, dir=".", fmt=:svg)
```
This will create an SVG image with `dot`, save it to the current directory, and open it with your default image viewer.

If the directory is not specified, a `tempdir()` is used.


## 📦 Installation

> PkgGraph is pending addition to the General registry. In the meantime you can install from git:
```
pkg> add https://github.com/tfiers/PkgGraph.jl
```

You might want to install `PkgGraph` in your base environment (e.g. `v1.8`).\
You can then use it in any project, without having to install it in that project.

One way to do this is to run – from any environment:
```
julia> using PkgGraph
```
If the package is not found, Julia will offer to install it.\
**Type '`o`' to choose** your base environment.

You can then call `using PkgGraph` from anywhere, without having to activate the base env.

<!-- /for-inclusion-in-docs -->


## ➕ More

If you want something a bit different than what this package offers, there are some helper functions you might find useful.

See the [![][docbadge]][docs] for more info.


[docbadge]: https://img.shields.io/badge/📕_Documentation-blue
[docs]: https://tfiers.github.io/PkgGraph.jl/



<br>

## 👩‍💻 Development

For the latest commit on `main` (aka "dev", unstable):

| [![][-----tests-badge]][------tests-link] |
|------------------------------------------:|
| [![][---doctest-badge]][----doctest-link] |
| [![][-docdeploy-badge]][--docdeploy-link] |

<!-- Must have empty line before linkdefs. -->
[------tests-link]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Tests.yml
[----doctest-link]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Doctest.yml
[--docdeploy-link]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Documentation.yml
[-----tests-badge]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Tests.yml/badge.svg
[---doctest-badge]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Doctest.yml/badge.svg
[-docdeploy-badge]: https://github.com/tfiers/PkgGraph.jl/actions/workflows/Documentation.yml/badge.svg

<!--To test wording:
|                       ![](https://img.shields.io/badge/Tests-passing-success?logo=github) |
|------------------------------------------------------------------------------------------:|
|                     ![](https://img.shields.io/badge/Doctest-passing-success?logo=github) |
| ![](https://img.shields.io/badge/Build%20%26%20deploy%20docs-passing-success?logo=github) |
-->


### Test

To run tests locally, run, in the project root:
```julia
pkg> activate .
pkg> test
```

To run doctests:
```julia
pkg> activate docs
julia> include("docs/doctest.jl")
```

### Docs

To build docs locally, run, in the project root:
```julia
pkg> activate docs
julia> include("docs/make.jl")
```
