function Help(){showVersion(),console.log("\n[*] Main :\nrafale [--deploy service-id] [--out output] [--url url]\n"),console.log("[*] configure :\nrafale [--seturl id] [--setkey key]\n"),console.log("[*] Show configuration :\nrafale --config\n"),console.log("[*] Reinit configuration :\nrafale --reinit\n"),console.log("[*] Rafale version :\nrafale --version\n")}module.exports=Help;