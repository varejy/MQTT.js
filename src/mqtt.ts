/*
 * Copyright (c) 2015-2015 MQTT.js contributors.
 * Copyright (c) 2011-2014 Adam Rudd.
 *
 * See LICENSE for more information
 */

import MqttClient from './lib/client'
import DefaultMessageIdProvider from './lib/default-message-id-provider'
import UniqueMessageIdProvider from './lib/unique-message-id-provider'
import Store, { IStore } from './lib/store'
import { connect, connectAsync } from './lib/connect'
import KeepaliveManager from './lib/KeepaliveManager'

export function mqtt_connect(args) {
	return connect(args)
}
export declare const Client: typeof MqttClient

export default connect
export { connect, connectAsync }

export { MqttClient }
export { Store, IStore }
export { DefaultMessageIdProvider, UniqueMessageIdProvider }
export { KeepaliveManager }

export * from './lib/client'
export * from './lib/shared'
export { ReasonCodes } from './lib/handlers/ack'
export type { Timer } from './lib/get-timer'
