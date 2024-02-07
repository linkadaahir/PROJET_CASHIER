<template>
  <div class="pageDasbord1_composant">
    <div class="flex items-stretch mb-2 w-full flex-col md:flex-row gap-4">
      <div
        class="rounded-[20px] border border-neutral-200 flex-col justify-between items-start gap-6.5 p-3 inline-flex mb-24">
        <div class="flex-col justify-start items-start flex">
          <div class="mt-2.5 p-3 pl-0">
            <svg class="w-8 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 14">
              <path
                d="M18 14H2a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1V12a2 2 0 0 1-2 2Z" />
            </svg>
          </div>
          <div class="justify-start items-center inline-flex">
            <div class="text-neutral-700 font-bold text-[35px] pr-2">
              70
            </div>
            <div class="text-neutral-700 text-[15px] font-normal">
              tickets
            </div>
          </div>
        </div>
        <div class="justify-between items-start gap-5 inline-flex">
          <div class="justify-start items-center gap-2.5 p-0.5 flex">
            <div class="bg-orange-300 bordure p-1 rounded-[100px] justify-start items-start gap-2.5 flex">
              <div class="relative">
                <svg class="w-4 h-4 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 20 14">
                  <path
                    d="M18 14H2a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1V12a2 2 0 0 1-2 2Z" />
                </svg>
              </div>
            </div>
            <div class="text-neutral-400 text-xs font-normal disparitionMot">
              pending
            </div>
          </div>

          <div class="justify-start items-center gap-2.5 p-0.5 flex">
            <div class="bg-red-300 bordure p-1 rounded-[100px] justify-start items-start gap-2.5 flex">
              <div class="relative">
                <svg class="w-4 h-4 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                    d="m5 12 4.7 4.5 9.3-9" />
                </svg>
              </div>
            </div>
            <div class="text-neutral-400 text-xs font-normal disparitionMot">
              Cancelled
            </div>
          </div>
          <div class="justify-start items-center gap-2.5 flex p-0.5">
            <div class="bg-green-300 bordure p-1 rounded-[100px] justify-center items-center gap-2.5 flex">
              <div class="relative">
                <svg class="w-4 h-4 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                    d="m5 12 4.7 4.5 9.3-9" />
                </svg>
              </div>
            </div>
            <div class="text-neutral-400 text-xs font-normal disparitionMot">
              validated
            </div>
          </div>
        </div>
      </div>

      <div class="flex-col justify-between gap-2.5 inline-flex w-3/4">
        <div class="inline-flex justify-between flex-row mb-6">
          <div class="flex-col justify-between items-start inline-flex">
            <div class="text-neutral-700 text-xl font-bold">
              Waiting tickets
            </div>
            <div class="text-neutral-400 text-xs font-normal">
              last tree waiting tickets
            </div>
          </div>

          <div class="rounded-[10px] border border-neutral-200 inline-flex">
            <div class="flex mr-1">
              <div class="w-8 h-2 p-2">
                <svg class="w-7 h-6 text-neutral-400 dark:text-white" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                  <path fill-rule="evenodd"
                    d="M21.7 21.7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 1.4-1.4l3.5 3.5c.4.4.4 1 0 1.4Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" name="text" alt="name" id="find" placeholder="find"
                class="text-stone-300 text-[15px] font-normal outline-none border-none" />
            </div>
          </div>
        </div>

        <div></div>

        <table class="table-auto">
          <tbody>
            <tr v-for="x of [1, 2, 3]">
              <td>
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div class="w-[30px] h-[30px] rounded-full bg-violet-800"></div>
                  <div class="text-neutral-700 font-semibold text-sm">
                    Alida
                  </div>
                </div>
              </td>

              <td class="">Malcolm Lockyer</td>

              <td>
                <div class="flex justify-end w-full">now</div>
              </td>

              <td class="">
                <div class="h-[50px] px-[5px] items-center gap-2.5 flex justify-end">
                  <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                    <div class="justify-start items-center gap-[5px] flex">
                      <div class="w-5 h-5 relative">
                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 16 3">
                          <path
                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </div>
                      <div class="text-neutral-700 text-[15px] font-normal choix">
                        more
                      </div>
                    </div>
                  </div>
                  <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                    <div class="w-5 h-5 relative">
                      <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                          d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg>
                    </div>
                    <div class="text-white text-[15px] font-normal choix">
                      Validate
                    </div>
                  </div>
                  <div
                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                    <div class="w-5 h-5 relative">
                      <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18 18 6m0 12L6 6" />
                      </svg>
                    </div>
                    <div class="text-neutral-700 text-[15px] font-normal choix">
                      Cancel
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-[15px] text-teal-400 font-normal font-['Roboto']">
          <a href="#" class="outline green_colorr">see more</a>
        </div>
      </div>
    </div>

    <div class="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-5 flex">
      <div>
        <span class="text-neutral-400 text-[15px] font-normal font-['Roboto']">welcome dear Rodolph i am
        </span>
        <span class="green_colorr text-[15px] font-normal font-['Roboto']">CASHIER</span>
        <span class="text-neutral-400 text-[15px] font-normal font-['Roboto']">
          what do you need</span>
      </div>

      <div class=" relative">
        <div class="w-32 h-32 left-[22px] top-0 absolute justify-center items-center inline-flex disparait">
          <svg width="98" height="88" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="128" height="128" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_54_501" transform="scale(0.0078125)" />
              </pattern>
              <image id="image0_54_501" width="128" height="128"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACxQAAAsUBidZ/
                    7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB8kSURBVHic7Z15nBXF1fd/Vd13v3eWOzMMAwwgMCCMsgwiirKKyCLigsQ3Jq8mmjyJiU80yUcfo+bBxCjGN0aNS/
                    SNUeOrUeIuisYNXB5ZZN+UfZkBZrmz37lLd9d5/xhmmKVvd99tZhjm+/nw+TDd1VV165yuqj516hRDL4MIDHUTh2mCRjPBhoHRUAYMFkAeA8sBKAeA48Q/
                    94nHmgBEAIQBBIgQ4AwVBDoMYgeJswMSV3ayrK0H2hU248e5HNKviXAlgMEAjjPQ64KJ+7Dq6aqu+9WJw7q7AslCgbGDNMgXMNAUApvEgLMA+NJUXB0B2xjYun99lb33+w8V3a5qGALOAacX4BIQDQPR0BGStJn45Ol9aapHypC7uwLxQgdmONWM+hkcNA9g8wRQ1KzFrCu0OZMBFwqBCx97pwCqBoAxwOsHpBNNaXMAQCGLhv5JwGQAlP5qJc4p0QMQFdu1GsccBiwBYRGAjK6uQ12ThDfX+vHOumx8scuHqvoTApdkICO3fWIlAjTWgIhPx2ePf9bVdY2HHt0DUEXJCMHZjaJaXM+A/
                    O6ow65SFx5+uwAvrs5FWNF5X0ig+SVvc0+oAIAfzSn/
                    76ffGn8Dy958sCvqmgg9UgGUqgkXSYz9SgBzAWLd0VGV18n47YuD8dwnedCEQUIhgFAj4PICYM3CDzcBAEYNDM0Sgu8VgYlvMNCfWM7GNV1S+TjoMUMAEZgWKLmcAXeDYUJ31uWfn+XglmeGItAQx/
                    vBOcA4oKmtlz69dyemjmlo/ZuAL4joHlvupo9SWd9k6BEKoARK5nKGe0GY2J31iCoMt/59CJ76IPnR5tyiIL5cth1Mb9QgrJY4v5P5v/
                    4y6YKSpFsVgKrGDRRcuh+E73dnPQAgGJFw1bKR+GhL7PlltlfFFedV44rJ1RhWEMG8e0bjcKW9U7rBeVF8dM9ODOsfMSyTEVYwWf3PTvaFLqRbFIBook3U4FcguguApzvq0JawwjD/d2fisx36wve5BG657BhuXXgMGW6t9XpNo4xlrw3AG2v9KAvYMMAfxRXn1eL2K8uQ41N189IhBKL7eA5/
                    gLENSvK/Jj66XAGUynNmcC6eADC6q8vWQwiGa/7PCLy+xq97f+GkGjx90wHkZaZdNts48RtZ7tfr0l1QW3hXFUQ0Q9YCJUs5Fx+jhwgfAB54o0BX+LJEuPs7ZXjt9j1dIXwAOFsw8T9aoGQpUdfJpUt6AApMKtSg/
                    pOBXdAV5Vll/V4vpt4xBqrWvhkkDrz4yz1YPKW6W+rFgE+YJl3L+q0/nu6y0q5panXJQgF1c08Tvqox/PTJoZ2Ezxjw1E37u034AEDALCFpW5SqCbPTXVbaFIDoakkLlDzICG8BTH+A7UZeWJWLzQc6zz9vWXgM18+q7IYadaIfZ2ylVjXxjnQWkpYhgKjYLqodLwBYko78k0XVGM782TgcrHC0uz56UAjr/
                    7QNTluPW795jvszfsTYKsufFlZJuQJQRbGXJMdrBMyJ57l61YktjQXYF8zDwYgfNYoLQc0BRbTvpBQ4ECIXwsKNKBwQxKFBRjw/JRRlCDTYOl3Py1TgkFMrfAeLwsGjyLXV40x3GSb79mJ69rfgMLIvd4Yx9hYL2v8XK/wqlMr6pVQBqHxyvrAp74FQYiX9t8F+WF4+Hp8GirC5cSA00qsOg1OW4LbZ4LRJkHmXTZDTBpFAjhTARVlb8IvClciUwhafw2qJs0XMv6EuVXVJmQJQzfihgviHIIwwSieI4c2Ks/HYkanYUD8odsUYg9dhg89u7xVCjwkJDLEfwe+GvoIS3yELD7DNXJXnsvy15akoPiUKQA0T8kSUfwHQSKN0K6vG4K69c7G3KS92hRjgddiR6XCA6xnSeykEQqGtDH8tehpDnAGz5Nu4pExnWdtqki036RamwOQMwZRPjbr9Y5EM3PLt5Xi/ytj+Y5ck5LidsElSstU6ZSESWJT9Of4wbLlJOqyWGjLmsjNWWRs/YpCUAhAV26navoLALo6V5rOa4bhxxzUoj3oN8/I57MhyObrGsesUIE8qx/Ixf0aurSFmGsbwNssefiVj/9JiJjIh4cGVCJyqHf/PSPhPlU7Bos03GAqfMSDH7UK2y9kn/DZUavmYve0e7GoqiJmGCJeJ6n2PJ1NOwgogqic+SMDVse7ff2A2btu9EEJ3Zt8MY0Cu2w2PvfMnWR+ABgeW7Loda+uGGyX7D616wu2JlpHQK6dWT1zAiN6J9fxTpVNw2+6Fpvnkelxw2/qEbwqpWD56GUa7j8VKoQnCHFvuxk/izTpuBaDApEIBbROAHL37r5WPww07vgMyydrvcsLr6OxM0Yc+MsJYNe5OI5tBGbfTBObbFJcdOy4FIJoha9V1q2It7OwP5WDa+pvRoDr0brfittmQ63GZFYbQsQCCB49DawxBDYabHTABCI2gRgRIIwhBPc/znjFIdhmSx4mMov7IGjMY4MnPbwptpXjv7PtjFwu8z/wbFzBm3cwYV620QMmDAH6td08ljovW/wybGwcY5iFzhgKfFyzGNz6pGqq//gbVa3dCbWhr9WSA3d68A0c6tYYNBoJnUBYGzi0BdyRX9+vy3sOvC981KIz+S/JvesB63SyiVE6cyTl9HOuZJ45cgDv2XGqaT57HDZdN39s2dDSAstdWQakLtr/BOeDJAuRTe8hgECiYVYzM0YWJZ0IqPh17l9HnocoFzmN5GzdYyc7SVwBRsZ1zehwxhB+IenDfgZhfg624ZDmm8Bu+PYxDL7yvI3wZ8OWc8sIHAALH0U92ouKLnYlnwmT8fM/1RilkjeOvVr2KLCUSNc5fwsCN68nSKabjPgBkOPWFGD4ewNE3vwApHewZnAPerOZNl70GhsDmI6jdbsXur8/28CiURbINSsA5oqbkRmu1MeHErH8nAF1rTlBzYPSXt6NONZ7UOSQJ+b7ODhgiqmLfk29CbWjq/JA3u2WzZScGD+2PkWOGIDPbh2hEwbHSCuzYuh+hJmNX7GRJVbkMhBE/nAHZZf7i6DHRvQ3PnflXgxRUze040+yrwHTrCzHtUZC+8AHgrcpiU+EDiPnJF1izQ1/4sl1X+L4MN6767kUYPrLjSuIYXLLwfLz/9lfYsHaXaX3iJdXlEhjKVm7EkCvPT6g+G4JnQoAb+BUwv4hiGYAbjPIxHAKUwMQ5RLjcKM3Lx8x3cXEwuHXGftI01KyLMR46O/cWHo8TN958hY4QTjzicuDy78zAlOnjTOsUD+kqt+lYHUTHYc8qzIaXK84zS/UDCpQYJjJUAAa62+h+o2bHl7XDzCoBhyzpfvYFD5VDC+u4XDOmO+m7dPE0+HPMd4ZfsvB89Osfe4yMl/SVy1GzeX/C9Xqj8lyzJEwD/mhcgxgolefMYMCFRg9/WTMMKpnPIx02/
                    Ulc6GAMr2fZho6b6rL9PhSPPWkTF0Lgo3fX4uH7XsLfH38LR0tPDnWcM0yZMd60XlZId7mN+xP369gXie1Q0wIDpiqVE2fGuh9TehLXfmOW+Zq6IaYVAACHpD/VUOqDutf1Zv3DRgxspxNffb4Nqz/eiEBVHQ7sO4oX/u97UKJqu/SpIN3lqklMWqNwoU5zmqZjnJbGuqerAFR1zrlGy7wt7Dbw7GmLTdLXMy3Wj2ed03t97nZ/
                    H9x7tN3fjQ1NqKw46SDjy0jNlsN0lyuU+JxD28IArK0vspJuWqy5gL4CcHGnlQrsa8o1TcMZi+naxV0xjDvU2bgfCrVfBMkvaL/VwG63tRunQ01JOcp0WblcTs7fcWPDUEvpBHCrbvkdL1BFyQgimK/lAqiKmmu7ZLAIYvPG+HwUnWfGB/e3XwqdNrsEo88+A5wzeH0uLP7ebDjbfFMfOhBz6TQu0l2uFOslsEh5NMtq0qsoMKmTDbrT4Cw4fgSLawRBzdyIEWvRBwCchfmA3rezqqBj3J2K4zU4sLcMZ5wYY+12G777g7lQVQ2y3HnOsPaL7aZ1s0K6y3UP1l1Vt0yDZm6DOYEkIK4H8Pu2F9v1AEQzZDDrwRpCwjyEipEmeYcPANNpRJA4oQTtefvVzzpZ3PSEsOaL7Ti472in64mStnKJ4C8x9PYxJaTF04PQj4iublfxdgqg1dTPBRDbCa1jdhY6CiM/P26TkT0+xiQm3Nk6WFVRi78/8RaqA/W6jwhB+PyTzVj55hem9YqHdJXrzHYmbApugeJznS9Uq/ZPa3uh3SvMBL7T1X6ZOVPHonbbPohIhzdeiTT3AnL79fPjRwN4dNnLGD+xCCOLhyAzywslqqL0cCU2r/8G5cfTs6s35eUSYeA8SxuoDGE6E2YjOMMSAJ+2Pn+yPiMcojqjHECm1czyV/0eYZNhwC5J6K+zCNSWhm+PoPTVVZ1n/1xqXgrubTuDCMgZPwj9LhyTdFaTPFvx91FPxfNIFfdnFLRsNG1tWbU6YybiED4AeGRzI4YV/fSNKkS/iyZ2sv5BaECw9kQwxt4CwTs4KyXCBwAfj3uvaC5q61pd+vjJ/9C8eHPKlnVW8ToghLUuKue8MRh45TRwe4ceRY0C9dWt0TdPaYjgHzsIhZeZ2vAtk2OwcSQWQsPclv+36VtZ3AowzG0+7mkk9Ow6umSMHoLhP70CWeOLwNraD4QK1AeAUIOukehUwOG14Yyrz0P+1OKU5jvOezD+hxhvVQAZaA65LgBzm2IHRrkr8W+MMk2nCA12i/v9ZJ8LBZeej36zJqBhTxlCh8uhNDS1MRur0AQHCQYi1mP1gcsc3CHDPcCPnEkjYM9KTzS8CzL3JvAUjaOGCXnMt6lSBoDmePvxMzHjsKV0UdW6ArQguZ3IGjccWeOS+07uzXCKGO4dNIBpEZoC4C0OAIwlFsBpatZ+MAvTvLCW8N7FPgwY4kjc3M0YvwA4MQcgonMSySTXHkSJr8w0XVhRe9zejd7AJdmbEn72xGEW4ETgDDg70YyWFJhXQhAhpHR5FNReDZHAjQWrEn6eAWOJwDgqS4YhhsevFRb32wInN/9EC0b7FCCVjHQegMNCuxuQhepJg7gmJxe2NdcexLUDzDehhBQViuhNBp3uZenQfyWdhwqtmDNi5l6dJtxSuBp2bj7Rqw+lxknjdKfQVoqxniNJ58MZO4MDZM2xz4DBrhr8bLD5SlhQURFR+74IkoFAeGTEs6nJTGAIZ80HHibNbUM/xmCXedCqmqZw3xdBEsz2rUWRK0UxpBkN5QLol4q83FzBs8X/hM1kKIgKDXWh9G7f6q14WS0eKnoxZfkxII+zGJE+EuGcjCP47Rn/Nk1XH4kg3PdZGB+k4eXRD8UdYtYwSyCXA0hpJO//HPIZfjLof0zTVQXDiPbNByxBJPDIsL9aCSAZJ8zPAVj2KrTKfUUrsDh/s2EaAUJFsAlKn5nYECLCXYUvYlZ2EjEFYufu4QBSHnlBYoS/FS/Hzwd/bphOEKG8sanvyyAGRBruH/IMrumXtvMm7UwLlKgA0haB4enS83HX3vmIGLiOMQb4nS54koyf05uwowl/K3oMEywFkE4YNe0KAACbGgbipzuvxq6g8YGMHrsN2S7naRUkuiNEwBjXbrxw5uPJmnqtoDEtUNKENMwDOqIICU8euQB/PDTLMJwM5wzZTudpGT3UiQb84YwXMSd7W1cVGWRaoKQGgOX9RclSq7jwVOn5eKpsCgIGW8tkzpHpdMBtt/X6CMJu1OM/ClbihwVdftJ8gGmBkqOIYzNIqogKCR9Wj8Irx8djdc0I1Cr6nRBnDG6bDW67DIcs9xJlIEiI4iznPtw86ANMzkjErSsllDEtULINwFndVQMA0IhhS+NAbKkfiL2hHOxpykNQdSDYYdsTMQaV3NCYAxoc0JgNxDj0NqCFNDll/oKMAS4psfGYgSBDhU8KYpC9CsXew1icux7DXBWpqVxybJUZQ2V3O1ZKjFDiK0WJrzRleV700TVYW5Waju38vKP48KJXUpJXT4IBFZwIPeKQvFQzu+BgyvK6OIV59SSIqIIDMHfqOwW5avC3kFjyXZvECFcO3p2CGvVAGD/OQUg8TFUPZqSvBteesSPpfP73sO0Y4U36bKaeCcNeWTDsTffWS0VIeLdqDN6tGoPN9QNxLJoBQUA/
                    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
                    +PToMJy9qwjzH2DmBd+AzNvvwFGV547fZWm3yy2CTea4QPAG5bcu3ic9gtCx8AVjdMah0OGPB2R+EDMc4M0jQ8Yln4DMjzuuDrcC5wtssJX5KbOzJSoEQ9jWyXI+YZykb4HHZkJ3C2QIsSME6P6N2PKd1z3/tH9c5gvqFNgDGgn8cNh84Ep4UmRUFtKKI79hnnzTAow5u2mX93E1JU1IRCUE2CacucI9vlTKonlCisbpszU/dtjJnrcc13NYCY5mErwgeauz2XzYYmRUEoqiKqqdBEc6wbw+dinDbaW3DZZDhtPoQUBU1RFVGhQdXavyQeux1+tyPpCXBE1f471j3DnL3LP/gQDLM7XudgyPW64DQRvhEN4ShqwrGjhuW4Xafd/sBAMIRgG6OTzDkKMpL7AopqWu3euRfG7MkNPScEZ3egg6mjZcxPRvgAQCYu23qGk96OvcMRu6oQaDCxkJqhEBmeAWmoAE2L53wNQuvCgdVu3wpGB0lwzrrdq6c70IuoXhsKI6Qk5i0dFVrZoXlTnzBKY9rKTEi3AwinUvgAENViTwptOnbz0wG7pL/
                    PsaqpCRE1PiUgAkKK+RGApi3dcM3s3TL4A6kUPhEhYhAbSI5x1nBvh4FBz8WBCKgIxqcEEVX5pOzSCz81S2eppXM9vockxlIW3K8xooAMFlxO5wghsX47EVDZGELYghJomojUwn6FpfKsJNo7/7z6qCZ+YnnpywAhCPXRqGGa01j+hsovQKi00BM0adpPquefp3/KZcfyrFbs4IJpz4UU7Wur6fUhBJqaoJkYhdK98NOTMev9zHqCUFRde2TBtOcslxdP5aoF5ihCS3g1w6FVItQXEs6Q6wasM939E6snUDTRVBNVrXiFtBKXAtRdOrUmHNbmktEAHoMZ3nW4KvfLeB877ZiftwuPnPkGuImdpGNPQASKUOSy2itm1ho+2IG4p9tHFk3/rElV743nmRnedfjLyOfjLeq05boB6/HwKHMlECBUNYYQVjVqUtX7Ds+b9bHhAzok9L11aP6034ajqqXXeYavT/iJEJcSNDQuPTR/6l2JlJPwB/f+4LHpEUU1jC4y07sWfynqE36iXDdgPR4settsTvBG/c41cfXIbUnc4rJkiVbJpbGKJnQ/N2b41uHRkf9IOPs+mrlx0JrYcwLCp42N9u9i6dKEI0gkZXKrnzulOhIMTdA0tZ2RaIZvXd+bn0L0hgNGbL3TEV6EH8xM6iCmpG2uh6+avT+iSOOJVAH0CT9dtFWCfHt9Hcl0adWiRQmdG9uWlBjdDy6c8k2xe9elF/u+bOgTfvq4bsB6/KnozcpF/l3TG6+8JCWRJlPmcfnqhT9eSRWTRgqGd0EoSVW+fbRj240Dv5rHxm1JWWi/lC67sX7rj3OyzWRA3N+jfRjDgI84bBey3NQJH0ixAgAAy1lbz/
                    yR+QBe7lxY38mhZkikYyoneon5IwtYzlpLCzzxkJaFd8Z2RLl/47UgWoY2S4gui3EAzRxGezOZtnZLLQSiZTxn0/cY22G8hJogafO8YAxCyt10BzFcBiAAAB7JmkuB1t3Rq7sRn9SqAAFiuEzK3XQHS2FsuI6k3fVG9m9cwSFNINCXA53WerDT+YzpfvZaEGgdl9RJsn/jinSX1yW+Vyxn/RHJz2f6eOhZM9s2gNP2KDkJCjws+oDkz7yAZW090BVldpnzHWMblGlFr//wkn67r/bIykGjtKoQKTvs4VRBkKYWOkoflHI3/FfbAA7ppntcb5762ubzV/2SwJYC0N1Pne/zwKHjJt3bIAJCmvppPTVcXj1/fspn+WZ0q++V7+WPRpKk/RHAoo73MpwOZDmTiz/U0wkrWrmqRa89vDD+dfxU0SOc7zJe/WCyELgfDDNbrtkkjoI2kTh6E1FNq48o2m+OLJz+eHfXpUcoQAsZy99fIMDuAsN5ANDf59HdLXOqomhaMKxpy44smJ7w+n2q6VEK0IJ7+QcTJc5+4Zala3M87lN8lwghrFF5VCgPlc6f8cfurk1HeqQCtOB7a+WoXJvnGbskTZY4P6VChahCaFFNXa+o4tayy2am7fTnZOnRCtCWgSs+v1pmdLtTlidIvGduHhQEUjT1gKqKlw6Fyn+PJUvSYr5NJaeMArSyfLmr0J1/k8T5YhtnZ8uS5Om+H0FQNGpShNiqkvZ6JEhPVi6ZGV/c1m7m1FOADvR/Y+VQm+y+QZLZRTLjo20Sz2Rp2lwmBAmVqEYV2l4i9qUK+1NlCyaf0mfKnfIKoMfAlavO5ypdxLk0hjMM5YwXgCFLYszJGZMBxlmzljCAIMCIBBEx0kiQJgghANWCxDEhcEgw+oYU/mHp5VPXdvdvSzX/H2CA1goXYAboAAAAAElFTkSuQmCC" />
            </defs>
          </svg>
        </div>
        <div class="">
          <div class="left-0 top-[92px] absolute flex-col justify-start items-center gap-2.5 inline-flex ">
            <div v-on:click="$emit('open_modal')"  class="p-2.5 bg-teal-400 text-white bordure rounded-[100px] justify-start items-start gap-2.5 inline-flex ">
             
                <div class="w-6 h-6 relative">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                      d="M5 12h14m-7 7V5" />
                  </svg>
                </div>
             
            </div>
            <div class="text-[15px] font-medium">New</div>
          </div>
          <div class="left-[128px] top-[92px] absolute flex-col justify-start items-center gap-2.5 inline-flex disparait">
            <div class="yellow_color bordure rounded-[100px] justify-start items-start gap-2.5 inline-flex">
              <a href="#">
                <div
                  class="p-2.5 bg-yellow-400 text-white bordure rounded-[100px] justify-start items-start gap-2.5 inline-flex N">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                      d="M19 6c0 1.7-3.1 3-7 3S5 7.7 5 6m14 0c0-1.7-3.1-3-7-3S5 4.3 5 6m14 0v6M5 6v6m0 0c0 1.7 3.1 3 7 3s7-1.3 7-3M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="text-neutral-700 text-[15px] font-medium font-['Roboto']">
              List
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default { 

  name:"pageDashbord1_composant",

  props: {
  label: { required: true, type: String },
  emits:['open_modal']


},

}

</script>   