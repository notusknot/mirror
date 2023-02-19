{
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        libraries = with pkgs;[
        ];

        packages = with pkgs; [
          cargo rustc nodejs nodePackages_latest.typescript-language-server nodePackages_latest.svelte-language-server
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;

          shellHook = ''
            export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
            export GIO_MODULE_DIR=${pkgs.glib-networking}/lib/gio/modules/
          '';
        };
      });
}
