/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

export class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
    // request.url.hash
    // request.url.search
    // request.url.query
    // request.url.pathname
    // request.url.path
    // request.url_raw
    // request.url_params
    // request.headers
    // request.user._id
    // request.user.name
    // request.user.username
    // request.content_raw
    // request.content

    return {
      content:{
        attachments: [
            {
                title: 'New commit in Your repository',
                title_link: request.content.compare,
                color: "#42f4c5",
                fields: [
                    {
                        title: request.content.text,
                        value: request.content.text,
                        short: request.content.text
                    },
                    {
                        title: request.content.text,
                        value: request.content.text,
                        short: request.content.text
                    },
                    {
                        title: request.content.text,
                        value: request.content.text,
                        short: request.content.text
                    },
                    {
                        title: request.content.text,
                        value: request.content.text,
                        short: request.content.text
                    },
                    {
                        title: request.content.text,
                        value: request.content.text
                    }
                ]
            }
        ]
       }
    };
  }
}