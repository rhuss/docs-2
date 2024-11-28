# evcc completion bash

Generate the autocompletion script for bash

## Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
source <(evcc completion bash)
```

To load completions for every new session, execute once:

### Linux:

```
evcc completion bash > /etc/bash_completion.d/evcc
```

### macOS:

```
evcc completion bash > $(brew --prefix)/etc/bash_completion.d/evcc
```

You will need to start a new shell for this setup to take effect.


```
evcc completion bash
```

## Options

```
      --no-descriptions   disable completion descriptions
```

## Options inherited from parent commands

```
  -c, --config string   Config file (default "~/evcc.yaml" or "/etc/evcc.yaml")
  -h, --help            Help
      --ignore-db       Run command ignoring service database
  -l, --log string      Log level (fatal, error, warn, info, debug, trace) (default "info")
      --log-headers     Log headers
```

## See also

* [evcc completion](evcc_completion.md)	 - Generate the autocompletion script for the specified shell

