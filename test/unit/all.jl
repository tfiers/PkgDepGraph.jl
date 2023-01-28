
using PkgGraph
using Test

@testset "unit" verbose=true begin
    include("DepGraphs.jl")
    include("DotString.jl")
    include("LoadTime.jl")
    include("SVG.jl")
    include("PkgGraph.jl")
end

nothing  # To not print big "Test.DefaultTestSet(…)"
