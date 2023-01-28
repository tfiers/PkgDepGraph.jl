
using PkgGraph
using Test
using Graphviz_jll: dot

@testset "PkgGraph" begin

    @testset "urls" begin

        base = PkgGraph.webapps[2]
        @test PkgGraph.url("digraph {Here->There}", base) ==
            "http://magjac.com/graphviz-visual-editor/?dot=digraph%20%7BHere-%3EThere%7D"
    end


    @testset "local" begin

        @test PkgGraph.output_path(:Test, ".", :svg) == joinpath(".", "Test-deps.svg")
        @test PkgGraph.dotcommand(:png, "infile", "outfile") == `$(dot()) -Tpng -ooutfile infile`
    end


    @testset "end-user" begin

        @test isnothing(depgraph_web("Test", dryrun = true))
        @test isnothing(depgraph_image("Test", dryrun = true))
        @test isnothing(depgraph_image("PyPlot", dryrun = true))
    end
end
