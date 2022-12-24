var documenterSearchIndex = {"docs":
[{"location":"ref/end-user/","page":"End-user","title":"End-user","text":"CurrentModule = PkgGraph","category":"page"},{"location":"ref/end-user/#End-user","page":"End-user","title":"End-user","text":"","category":"section"},{"location":"ref/end-user/","page":"End-user","title":"End-user","text":"PkgGraph\nopen\ncreate\nset_base_url","category":"page"},{"location":"ref/end-user/#PkgGraph.PkgGraph","page":"End-user","title":"PkgGraph.PkgGraph","text":"Visualize the dependency graph of a Julia package.\n\nUse PkgGraph.open to view the graph in the browser, or PkgGraph.create to generate an image locally.\n\n\n\n\n\n","category":"module"},{"location":"ref/end-user/#PkgGraph.open","page":"End-user","title":"PkgGraph.open","text":"open(pkgname)\n\nOpen the browser to an image of pkgname's dependency graph.\nThe given package must be installed in the currently active project.\n\nTo render the dependency graph using a local Graphviz dot installation (instead of an online Graphviz renderer), use create.\n\nFor more info, see url.\n\n\n\n\n\n","category":"function"},{"location":"ref/end-user/#PkgGraph.create","page":"End-user","title":"PkgGraph.create","text":"create(pkgname; dir = tempdir(), fmt = :png)\n\nRender the dependency graph of the given package as an image in dir, and open it with your default image viewer. Uses the external program 'dot' (see graphviz.org), which must be available on PATH.\n\nfmt is an output file format supported by dot, such as svg or png.\n\n\n\n\n\n","category":"function"},{"location":"ref/end-user/#PkgGraph.set_base_url","page":"End-user","title":"PkgGraph.set_base_url","text":"set_base_url(new)\n\nSet the rendering website that will be used by open and url.\n\nSee PkgGraph.base_urls for some options.\n\n\n\n\n\n","category":"function"},{"location":"ref/internal/","page":"Internal","title":"Internal","text":"CurrentModule = PkgGraph.Internals","category":"page"},{"location":"ref/internal/#Internal","page":"Internal","title":"Internal","text":"","category":"section"},{"location":"ref/internal/#Creating-a-dependency-graph","page":"Internal","title":"Creating a dependency graph","text":"","category":"section"},{"location":"ref/internal/","page":"Internal","title":"Internal","text":"depgraph","category":"page"},{"location":"ref/internal/#PkgGraph.Internals.depgraph","page":"Internal","title":"PkgGraph.Internals.depgraph","text":"deps = depgraph(pkgname)\n\nBuild a graph of the dependencies of the given package, using the active project's Manifest file.\n\nThe returned deps object is a flat list of \"PkgA\" => \"PkgB\" dependency pairs.\n\nExample\n\n```jldoctest\n\njulia> using PkgGraph.Internals\n\njulia> depgraph()\n\n```\n\n\n\n\n\n","category":"function"},{"location":"ref/internal/#DOT-strings","page":"Internal","title":"DOT strings","text":"","category":"section"},{"location":"ref/internal/","page":"Internal","title":"Internal","text":"deps_as_DOT\nto_DOT_str\nstyle","category":"page"},{"location":"ref/internal/#PkgGraph.Internals.deps_as_DOT","page":"Internal","title":"PkgGraph.Internals.deps_as_DOT","text":"deps_as_DOT(pkgname)\n\nCreate the dependency graph of pkgname and render it as a Graphviz DOT string.\n\nExample output (truncated), for \"Unitful\":\n\ndigraph {\n    node [fontname = \"sans-serif\"]\n    edge [arrowsize = 0.88]\n    Unitful -> ConstructionBase\n    ConstructionBase -> LinearAlgebra\n    LinearAlgebra -> Libdl\n    ⋮\n    Unitful -> Random\n    Random -> SHA\n    Random -> Serialization\n}\n\nFor more info, see depgraph and to_DOT_str.\n\n\n\n\n\n","category":"function"},{"location":"ref/internal/#PkgGraph.Internals.to_DOT_str","page":"Internal","title":"PkgGraph.Internals.to_DOT_str","text":"to_DOT_str(edges; indent = 4)\n\nBuild a string that represents the given directed graph in the Graphviz DOT format.\n\nExample:\n\njulia> empty!(PkgGraph.style);\n\njulia> edges = [:A => :B, \"yes\" => \"no\"];\n\njulia> PkgGraph.to_DOT_str(edges, indent = 2) |> println\ndigraph {\n  A -> B\n  yes -> no\n}\n\n\n\n\n\n","category":"function"},{"location":"ref/internal/#PkgGraph.Internals.style","page":"Internal","title":"PkgGraph.Internals.style","text":"style\n\nA list of strings used in constructing the \"digraph\" string in to_DOT_str. They are insterted as lines just before the graph edge lines.\n\nTo use the default Graphviz style, call:\n\nempty!(PkgGraph.style)\n\nSee Graphviz Attributes for more info on how dot graphs can be styled.\n\n\n\n\n\n","category":"constant"},{"location":"ref/internal/#Online-rendering","page":"Internal","title":"Online rendering","text":"","category":"section"},{"location":"ref/internal/","page":"Internal","title":"Internal","text":"url\nbase_urls","category":"page"},{"location":"ref/internal/#PkgGraph.Internals.url","page":"Internal","title":"PkgGraph.Internals.url","text":"url(pkgname)\n\nCreate a URL at which the dependency graph of pkgname is rendered as an image, using an online Graphviz rendering service.\n\nHow it works\n\nThe dependency graph of pkgname is created locally, and converted to a string in the Graphviz DOT format (see deps_as_DOT). This string is URL-encoded, and appended to a partly-complete URL, which is by default the first entry in the PkgGraph.base_urls list. To use a different rendering website, use set_base_url.\n\n\n\n\n\n","category":"function"},{"location":"ref/internal/#PkgGraph.Internals.base_urls","page":"Internal","title":"PkgGraph.Internals.base_urls","text":"base_urls\n\nA list of websites that can render Graphviz dot-formatted strings. See url.\n\n@show base_urls\n\n\n\n\n\n","category":"constant"},{"location":"ref/internal/","page":"Internal","title":"Internal","text":"","category":"page"},{"location":"background/#Background","page":"Background","title":"Background","text":"","category":"section"},{"location":"background/#Graph-layout","page":"Background","title":"Graph layout","text":"","category":"section"},{"location":"background/","page":"Background","title":"Background","text":"'Mermaid diagrams' are something more newfangled than dot. They use the Dagre.js library for graph layout, which is based on dot (see its wiki, and codebase).","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"I find that dot's layout algorithm does a bit better than Mermaid / dagre's (even though Mermaid has prettier styling).","category":"page"},{"location":"","page":"Home","title":"Home","text":"{this is overwritten by a version of the ReadMe in make.jl}","category":"page"}]
}
