export const homeModule = {
  namespaced: true,
  state: {
    selectedPlace: {
      Version: 1,
      Key: "215793",
      Type: "City",
      Rank: 95,
      LocalizedName: "Tel-aviv Port",
      Country: {
        ID: "IL",
        LocalizedName: "Israel"
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv"
      },
      text: "Tel-aviv Port, Tel Aviv, IL"
    },
    places: [
      {
        Version: 1,
        Key: "215793",
        Type: "City",
        Rank: 95,
        LocalizedName: "Tel-aviv Port",
        Country: {
          ID: "IL",
          LocalizedName: "Israel"
        },
        AdministrativeArea: {
          ID: "TA",
          LocalizedName: "Tel Aviv"
        },
        text: "Tel-aviv Port, Tel Aviv, IL"
      }
    ],
    fiveDaysForecasts: null,
    currentWeather: null,
    loading: false
  },
  mutations: {
    SET_PLACES: (state, places) => (state.places = places),
    SET_SELECTED_PLACE: (state, place) => (state.selectedPlace = place),
    SET_CURRENT_WEATHER: (state, weather) => (state.currentWeather = weather),
    SET_FIVE_DAYS_FORECASTS: (state, fiveDays) =>
      (state.fiveDaysForecasts = fiveDays)
  },
  actions: {
    autocomplete: async (context, value) => {
      if (
        !value ||
        (context.state.selectedPlace &&
          context.state.selectedPlace.text === value)
      )
        return;
      context.state.loading = true;
      const url = `${process.env.VUE_APP_WEATHER_BASE_URL}cities/autocomplete`;
      const params = {
        apikey: process.env.VUE_APP_API_KEY,
        q: value
      };
      // const { data } = await axios.get(url, { params });
      const data = [
        {
          Version: 1,
          Key: "213225",
          Type: "City",
          Rank: 30,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "IL",
            LocalizedName: "Israel"
          },
          AdministrativeArea: {
            ID: "JM",
            LocalizedName: "Jerusalem"
          }
        },
        {
          Version: 1,
          Key: "250835",
          Type: "City",
          Rank: 65,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "NZ",
            LocalizedName: "New Zealand"
          },
          AdministrativeArea: {
            ID: "MWT",
            LocalizedName: "Manawatu-Wanganui"
          }
        },
        {
          Version: 1,
          Key: "128752",
          Type: "City",
          Rank: 65,
          LocalizedName: "Jerusalen",
          Country: {
            ID: "SV",
            LocalizedName: "El Salvador"
          },
          AdministrativeArea: {
            ID: "PA",
            LocalizedName: "La Paz"
          }
        },
        {
          Version: 1,
          Key: "32864",
          Type: "City",
          Rank: 75,
          LocalizedName: "Jerusalen",
          Country: {
            ID: "BO",
            LocalizedName: "Bolivia"
          },
          AdministrativeArea: {
            ID: "B",
            LocalizedName: "El Beni"
          }
        },
        {
          Version: 1,
          Key: "221483",
          Type: "City",
          Rank: 75,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "JM",
            LocalizedName: "Jamaica"
          },
          AdministrativeArea: {
            ID: "10",
            LocalizedName: "Westmoreland"
          }
        },
        {
          Version: 1,
          Key: "2310187",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalém",
          Country: {
            ID: "BR",
            LocalizedName: "Brazil"
          },
          AdministrativeArea: {
            ID: "MT",
            LocalizedName: "Mato Grosso"
          }
        },
        {
          Version: 1,
          Key: "1376675",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "CZ",
            LocalizedName: "Czechia"
          },
          AdministrativeArea: {
            ID: "20",
            LocalizedName: "Central Bohemian"
          }
        },
        {
          Version: 1,
          Key: "3537004",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "IE",
            LocalizedName: "Ireland"
          },
          AdministrativeArea: {
            ID: "KE",
            LocalizedName: "County Kildare"
          }
        },
        {
          Version: 1,
          Key: "1062987",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "MX",
            LocalizedName: "Mexico"
          },
          AdministrativeArea: {
            ID: "DUR",
            LocalizedName: "Durango"
          }
        },
        {
          Version: 1,
          Key: "2115414",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "US",
            LocalizedName: "United States"
          },
          AdministrativeArea: {
            ID: "OH",
            LocalizedName: "Ohio"
          }
        }
      ];
      const places = data.map(place => ({
        ...place,
        text: `${place.LocalizedName}, ${place.AdministrativeArea.LocalizedName} ,${place.Country.ID}`
      }));
      context.commit("SET_PLACES", places);
      context.state.loading = false;
    },
    getCurrentWeather: async context => {
      context.commit("SET_CURRENT_WEATHER", [
        {
          LocalObservationDateTime: "2020-06-06T23:06:00+03:00",
          EpochTime: 1591473960,
          WeatherText: "Clear",
          WeatherIcon: 33,
          HasPrecipitation: false,
          PrecipitationType: null,
          IsDayTime: false,
          Temperature: {
            Metric: {
              Value: 20.8,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 69,
              Unit: "F",
              UnitType: 18
            }
          },
          RealFeelTemperature: {
            Metric: {
              Value: 19.7,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 67,
              Unit: "F",
              UnitType: 18
            }
          },
          RealFeelTemperatureShade: {
            Metric: {
              Value: 19.7,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 67,
              Unit: "F",
              UnitType: 18
            }
          },
          RelativeHumidity: 69,
          IndoorRelativeHumidity: 69,
          DewPoint: {
            Metric: {
              Value: 15,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 59,
              Unit: "F",
              UnitType: 18
            }
          },
          Wind: {
            Direction: {
              Degrees: 315,
              Localized: "NW",
              English: "NW"
            },
            Speed: {
              Metric: {
                Value: 7.5,
                Unit: "km/h",
                UnitType: 7
              },
              Imperial: {
                Value: 4.6,
                Unit: "mi/h",
                UnitType: 9
              }
            }
          },
          WindGust: {
            Speed: {
              Metric: {
                Value: 9.6,
                Unit: "km/h",
                UnitType: 7
              },
              Imperial: {
                Value: 6,
                Unit: "mi/h",
                UnitType: 9
              }
            }
          },
          UVIndex: 0,
          UVIndexText: "Low",
          Visibility: {
            Metric: {
              Value: 16.1,
              Unit: "km",
              UnitType: 6
            },
            Imperial: {
              Value: 10,
              Unit: "mi",
              UnitType: 2
            }
          },
          ObstructionsToVisibility: "",
          CloudCover: 1,
          Ceiling: {
            Metric: {
              Value: 8077,
              Unit: "m",
              UnitType: 5
            },
            Imperial: {
              Value: 26500,
              Unit: "ft",
              UnitType: 0
            }
          },
          Pressure: {
            Metric: {
              Value: 1013,
              Unit: "mb",
              UnitType: 14
            },
            Imperial: {
              Value: 29.91,
              Unit: "inHg",
              UnitType: 12
            }
          },
          PressureTendency: {
            LocalizedText: "Rising",
            Code: "R"
          },
          Past24HourTemperatureDeparture: {
            Metric: {
              Value: 0,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 0,
              Unit: "F",
              UnitType: 18
            }
          },
          ApparentTemperature: {
            Metric: {
              Value: 19.4,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 67,
              Unit: "F",
              UnitType: 18
            }
          },
          WindChillTemperature: {
            Metric: {
              Value: 20.6,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 69,
              Unit: "F",
              UnitType: 18
            }
          },
          WetBulbTemperature: {
            Metric: {
              Value: 17.3,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 63,
              Unit: "F",
              UnitType: 18
            }
          },
          Precip1hr: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1
            }
          },
          PrecipitationSummary: {
            Precipitation: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            PastHour: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past3Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past6Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past9Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past12Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past18Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            },
            Past24Hours: {
              Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3
              },
              Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1
              }
            }
          },
          TemperatureSummary: {
            Past6HourRange: {
              Minimum: {
                Metric: {
                  Value: 20.8,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 69,
                  Unit: "F",
                  UnitType: 18
                }
              },
              Maximum: {
                Metric: {
                  Value: 26.6,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 80,
                  Unit: "F",
                  UnitType: 18
                }
              }
            },
            Past12HourRange: {
              Minimum: {
                Metric: {
                  Value: 20.8,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 69,
                  Unit: "F",
                  UnitType: 18
                }
              },
              Maximum: {
                Metric: {
                  Value: 29.5,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 85,
                  Unit: "F",
                  UnitType: 18
                }
              }
            },
            Past24HourRange: {
              Minimum: {
                Metric: {
                  Value: 17.9,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 64,
                  Unit: "F",
                  UnitType: 18
                }
              },
              Maximum: {
                Metric: {
                  Value: 29.5,
                  Unit: "C",
                  UnitType: 17
                },
                Imperial: {
                  Value: 85,
                  Unit: "F",
                  UnitType: 18
                }
              }
            }
          },
          MobileLink:
            "http://m.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us"
        }
      ]);
    },
    getFiveDaysForecasts: async context => {
      context.commit("SET_FIVE_DAYS_FORECASTS", {
        Headline: {
          EffectiveDate: "2020-06-06T08:00:00+03:00",
          EffectiveEpochDate: 1591419600,
          Severity: 4,
          Text:
            "Air quality will be unhealthy for sensitive groups Saturday morning through Monday morning",
          Category: "air quality",
          EndDate: "2020-06-08T14:00:00+03:00",
          EndEpochDate: 1591614000,
          MobileLink:
            "http://m.accuweather.com/en/il/jerusalem/213225/extended-weather-forecast/213225?unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?unit=c&lang=en-us"
        },
        DailyForecasts: [
          {
            Date: "2020-06-04T07:00:00+03:00",
            EpochDate: 1591243200,
            Temperature: {
              Minimum: {
                Value: 15.8,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 26.8,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 1,
              IconPhrase: "Sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?unit=c&lang=en-us",
            Link:
              "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?unit=c&lang=en-us"
          },
          {
            Date: "2020-06-05T07:00:00+03:00",
            EpochDate: 1591329600,
            Temperature: {
              Minimum: {
                Value: 15.6,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 27.4,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 1,
              IconPhrase: "Sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&unit=c&lang=en-us",
            Link:
              "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&unit=c&lang=en-us"
          },
          {
            Date: "2020-06-06T07:00:00+03:00",
            EpochDate: 1591416000,
            Temperature: {
              Minimum: {
                Value: 17.2,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 29.3,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false
            },
            Night: {
              Icon: 37,
              IconPhrase: "Hazy moonlight",
              HasPrecipitation: false
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&unit=c&lang=en-us",
            Link:
              "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&unit=c&lang=en-us"
          },
          {
            Date: "2020-06-07T07:00:00+03:00",
            EpochDate: 1591502400,
            Temperature: {
              Minimum: {
                Value: 17.3,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 30.4,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&unit=c&lang=en-us",
            Link:
              "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&unit=c&lang=en-us"
          },
          {
            Date: "2020-06-08T07:00:00+03:00",
            EpochDate: 1591588800,
            Temperature: {
              Minimum: {
                Value: 16.6,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 28.9,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 1,
              IconPhrase: "Sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&unit=c&lang=en-us",
            Link:
              "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&unit=c&lang=en-us"
          }
        ]
      });
    }
  }
};
