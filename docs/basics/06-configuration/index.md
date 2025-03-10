---
---




# Configuration

Arrower uses [viper]( https://github.com/spf13/viper) for configuration.
So you can be flexible in how you set up your app to build and ship what you want.

Arrower ships with its own config that has everything to get you started with 
an empty project.

In the most cases you want to roll your own config, to support exactly what you need.
It is seamless to extend the Arrower config to your needs:

```go title="shared/infrastructure/config/config.go"
type MyConfig struct {
    // highlight-next-line
	arrower.Config `mapstructure:",squash"`
	YourKey        string `mapstructure:"your-key"`
}

func Load(cfgFile string) (*Config, error) {
  // highlight-next-line
  vip := arrower.DefaultViper()

  // Priority 2: default values
  vip.SetDefault("", nil)
  // Priority 1: config file values
  vip.SetConfigFile(cfgFile)
  // Priority 0: environment variables values
  vip.SetEnvPrefix("YourAppsName")
  
  // ...
  
  config := Config{}

  // highlight-next-line
  err := vip.Unmarshal(&config)
  
  return &config, nil
}
```


This is an example of a Arrower configuration file.
Just add your own configuration according to your needs.

Familiarise yourself with viper's precedence order. 
In the following example of a configuration file for the test environment,
only the required keys are set, and other keys fall back to the configured defaults.

```yaml title=".config/your-config_test.config.yaml"
environment: test

postgres:
  user: arrower
  password: secret
  database: arrower_test
  host: localhost
  port: 5432
  sslmode: disable
  max_conns: 10

// highlight-next-line
your-key: your-value
```